import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IImage } from '../interfaces/definitions';

@Injectable()
export class CrudService {

  constructor(private store: Store<AppState>) { }

  public CreateItem (item: IImage) {
    this.store.dispatch({
      type: 'ADD_NEW_ITEM',
      payload: item
    });
  }

  public UpdateItem (item: IImage) {
    this.store.dispatch({
      type: 'UPDATE_ITEM',
      payload: item
    });
  }

  public DeleteItem (item: IImage) {
    this.store.dispatch({
      type: 'DELETE_ITEM',
      payload: item
    });
  }
}
