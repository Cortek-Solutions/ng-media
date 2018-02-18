import { Component, OnInit } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { IImage, AppState } from '../../../definitions';
import { Store } from '@ngrx/store';

declare var require: any;

function selectImage (image: IImage, images: IImage[]): IImage[] {
  return images.map((x: IImage) => {
    if ( ! x.$meta) {
      x.$meta = {
        selected: false
      };
    }
    if (x.id === image.id) {
      x.$meta.selected = true;
    } else {
      x.$meta.selected = false;
    }
    return x;
  });
}
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  public images: Array<IImage> = [];

  constructor(
    private _ub: UploaderService,
    private store: Store<AppState>,
  ) {
    try {
      this.images = [];
    } catch (error) {
      //
    }
  }
  ngOnInit() {
    this.store.select('mediaItems').subscribe((items: IImage[]) => {
      this.images = items;
    });
  }

  public ImageSelect (image: IImage) {
    this._ub.photoSelector.emit(image);
    this.images = selectImage(image, this.images);
    console.log( image );
  }
}
