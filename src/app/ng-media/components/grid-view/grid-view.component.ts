import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { IImage, AppState, IEvent, IInteractionType } from '../../interfaces/definitions';
import { RequestsService } from '../../services/requests.service';
import { DetailPanelService } from './../../services/detail-panel.service';
import { StoreService } from '../../services/store.service';

declare var require: any;

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  public images: Array<IImage> = [];
  public searchMode = false;
  public filteredImages: Array<IImage> = [];
  @Output() public selectionChange: EventEmitter<Array<IImage>> = new EventEmitter();
  @Input() public InteractionType: IInteractionType = IInteractionType.Edit;

  constructor(
    private uploader: UploaderService,
    private requests: RequestsService,
    private panel: DetailPanelService,
    private store: StoreService,
  ) {
    try {
      this.images = [];
    } catch (error) {
      //
    }
  }
  ngOnInit() {
    this.uploader.events.subscribe((event: IEvent) => {
      if (event.type === 'SEARCH_START') {
        this.searchMode = true;
      }
      if (event.type === 'SEARCH_CLEAR') {
        this.searchMode = false;
      }
    });
    this.store.GetSubsriber().subscribe((items: IImage[]) => {
      this.images = items;
    });
    this.requests.GetInitialMedias();
  }

  public GetSearchImages () {
    return this.filteredImages;
  }
  public GetImages () {
    return this.images;
  }

  public ImageSelect (image: IImage) {
    if (this.InteractionType === IInteractionType.MultipleSelect) {
      this.images = this.uploader.multipleSelectImage(image, this.images);
    }
    if (this.InteractionType === IInteractionType.SingleSelect) {
      this.images = this.uploader.selectImage(image, this.images);
    }
    if (this.InteractionType === IInteractionType.Edit) {
      this.images = this.uploader.selectImage(image, this.images);
      this.uploader.photoSelector.emit(image);
      this.panel.showDetaile(image);
    }
    this.selectionChange.emit(this.images);
  }
}
