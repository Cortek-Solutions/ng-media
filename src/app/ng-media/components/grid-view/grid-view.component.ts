import { Component, OnInit } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { IImage, AppState, IEvent } from '../../interfaces/definitions';
import { Store } from '@ngrx/store';
import { RequestsService } from '../../services/requests.service';
import { DetailPanelService } from './../../services/detail-panel.service';

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

  constructor(
    private uploader: UploaderService,
    private requests: RequestsService,
    private store: Store<AppState>,
    private panel: DetailPanelService
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
    this.store.select('mediaItems').subscribe((items: IImage[]) => {
      this.images = items;
    });
    this.store.select('searchMediaItems').subscribe((items: IImage[]) => {
      this.filteredImages = items;
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
    this.uploader.photoSelector.emit(image);
.  this.images = this.uploader.selectImage(image, this.images);
    this.panel.showDetaile(image);
  }
}
