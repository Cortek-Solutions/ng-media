import { Component, OnInit } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  public images: Array<any> = [];

  constructor(private _ub: UploaderService) {
    _ub.uploaderBridge.subscribe(items => {
      this.images.push(items);
    });
  }
  ngOnInit() {
  }

}
