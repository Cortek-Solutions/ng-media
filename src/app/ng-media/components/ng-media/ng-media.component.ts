import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IImage, AppState } from '../../interfaces/definitions';
import media from '../../mocks';
declare var require: any;
const uuid = require('uuid/v1');

@Component({
  selector: 'app-ng-media',
  templateUrl: './ng-media.component.html',
  styleUrls: ['./ng-media.component.scss']
})
export class NgMediaComponent {
  public images: Array<any> = [];

  constructor(
    private store: Store<AppState>,
  ) {
    this.store.dispatch({
      type: 'RESET_ITEMS',
      payload: media.map((x: IImage) => {
        x.id = uuid();
        return x;
      }),
    });
  }
}
