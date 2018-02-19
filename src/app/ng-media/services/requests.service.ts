import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IImage } from '../../definitions';

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

import media from '../mocks';
declare var require: any;
const uuid = require('uuid/v1');

@Injectable()
export class RequestsService {

  constructor(
    private store: Store<AppState>,
  ) { }


  /**
   * Gets the media object based on popularity, or based on user search
   */
  public GetInitialMedias () {

    this.store.dispatch({
      type: 'RESET_ITEMS',
      payload: media.map((x: IImage) => {
        x.id = uuid();
        x.date = randomDate(new Date(2018, 0, 1), new Date(2018, 12, 30));
        return x;
      }),
    });
  }

}
