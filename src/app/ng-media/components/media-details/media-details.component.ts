import { Component, OnInit } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { IImage, AppState } from '../../../definitions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit {

  public image: IImage = null;
  constructor(
    private us: UploaderService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.us.photoSelector.subscribe((image: IImage) => {
      this.image = image;
    });
  }

  public DeleteImage (image: IImage) {
    this.store.dispatch({
      type: 'DELETE_ITEM',
      payload: image
    });
    this.image = null;
  }
  public UpdateImage (image: IImage) {
    this.store.dispatch({
      type: 'UPDATE_ITEM',
      payload: image
    });
    this.image = null;
  }

}
