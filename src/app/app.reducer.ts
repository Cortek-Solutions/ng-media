import { IImage } from './definitions';
import { Action } from '@ngrx/store';
import { merge } from 'lodash';

export function mediaReducer(items: Array<IImage> = [], action: Action) {
  if (action.type === 'RESET_ITEMS') {
    return action['payload'];
  }
  if (action.type === 'ADD_NEW_ITEM') {
    return [action['payload']].concat(items);
  }
  if (action.type === 'UPDATE_ITEM') {
    const $item = action['payload'] as IImage;
    return items.map(item => {
      if (item.id === $item.id) {
        return merge(item, $item);
      }
      return item;
    });
  }
  if (action.type === 'DELETE_ITEM') {
    const $item = action['payload'] as IImage;
    return items.filter(x => x.id !== $item.id);
  }
  return items;
}

export function mediaSearchReducer(items: Array<IImage> = [], action: Action) {
  if (action.type === 'SEARCH_RESET_ITEMS') {
    return action['payload'];
  }
  if (action.type === 'SEARCH_ADD_NEW_ITEM') {
    return [action['payload']].concat(items);
  }
  if (action.type === 'DELETE_ITEM') {
    const $item = action['payload'] as IImage;
    return items.filter(x => x.id !== $item.id);
  }
  return items;
}

