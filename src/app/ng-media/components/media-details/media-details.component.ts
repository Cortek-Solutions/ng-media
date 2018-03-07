import { Component, OnInit } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { IImage, AppState } from '../../interfaces/definitions';
import { RequestsService } from '../../services/requests.service';
import { StoreService } from '../../services/store.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit {
  public image: IImage = null;
  public images: Array<IImage>;
  public appRef: any;
  public _ref: any;

  constructor(
    private us: UploaderService,
    private requests: RequestsService,
    private store: StoreService,
    private util: UtilsService,
  ) { }

  ngOnInit() {
    this.us.photoSelector.subscribe((image: IImage) => {
      this.image = image;
    });
    this.store.GetSubsriber().subscribe((items: IImage[]) => {
      this.images = items;
    });
    this.store.forceRefresh();
    this.util.createEscapeClose(this);
  }

  public DeleteImage (image: IImage) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.store.DeleteItem(image);
      this._ref.destroy();
    }
    this.requests.DeleteItem(image.id);
    this.store.DeleteItem(image);
    this.image = null;
  }

  public UpdateImage (image: IImage) {
    this.store.UpdateItem(image);
    this.requests.UpdateImage(image);
    this.store.UpdateItem(image);
    this.image = null;
    this._ref.destroy();
  }

  enableEditing(image: IImage) {
    image.$meta.editing = true;
    this.store.UpdateItem(image);
  }

  disableEditing(image: IImage) {
    image.$meta.editing = false;
    this.store.UpdateItem(image);
  }

  chnageItem(status) {
    let item = 0;
    const itemIndex = this.images.findIndex( x => x.id === this.image.id );
    this.disableEditing(this.images[itemIndex]);
    switch (status) {
      case 'next':
        item = itemIndex + 1;
        item = item > this.images.length - 1 ? 0 : item;
        this.image = this.images[item];
      break;
      case 'prev':
        item = itemIndex - 1;
        item = item < 0 ? this.images.length - 1 : item;
        this.image = this.images[item];
      break;
    }
  }

  close(e) {
    if (e.target === e.currentTarget) {
      this.disableEditing(this.image);
      this._ref.destroy();
    }
  }

}
