import { IImage } from './definitions';
import { Action } from '@ngrx/store';

export function mediaReducer(items: Array<IImage> = [], action: Action) {
  if (action.type === 'RESET_ITEMS') {
    return action['payload'];
  }
  if (action.type === 'ADD_NEW_ITEM') {
    return [action['payload']].concat(items);
  }
  return items;
}
