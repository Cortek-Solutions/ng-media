import { Component } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { IImage, AppState } from '../../interfaces/definitions';
import { Store } from '@ngrx/store';
import { CrudService } from '../../services/crud.service';
@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent {
  public image: IImage = null;
  public images: Array<IImage>;
  public appRef: any;
  public _ref: any;

  constructor(
    private us: UploaderService,
    private store: Store<AppState>,
    private crud: CrudService
  ) {
    store.select('mediaItems').subscribe((items: IImage[]) => {
      this.images = items;
    });
  }

  public DeleteImage (image: IImage) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.crud.DeleteItem(image);
      this._ref.destroy();
    }
  }

  public UpdateImage (image: IImage) {
    this.crud.UpdateItem(image);
  }

  enableEditing(image: IImage) {
    image.$meta.editing = true;
    this.crud.UpdateItem(image);
  }

  disableEditing(image: IImage) {
    image.$meta.editing = false;
    this.crud.UpdateItem(image);
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
