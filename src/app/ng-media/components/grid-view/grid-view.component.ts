import { Component, OnInit } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { IImage } from '../../../definitions';
import media from '../../mocks';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  public images: Array<IImage> = [];

  constructor(private _ub: UploaderService) {
    _ub.uploaderBridge.subscribe(items => {
      this.images.push(items);
      // localStorage.setItem('media_cache', JSON.stringify(this.images));
    });
    try {
      // const media = JSON.parse(localStorage.getItem('media_cache'));
      // console.log(localStorage.getItem('media_cache'));
      // console.log(media);
      this.images = media || [];
    } catch (error) {
      //
    }
  }
  ngOnInit() {
  }

}
