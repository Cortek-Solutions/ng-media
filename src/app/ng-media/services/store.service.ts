import { Injectable } from '@angular/core';
import { IImage } from '../interfaces/definitions';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { merge } from 'lodash';
@Injectable()
export class StoreService {

  public subject: Subject<any> = null;
  public items: Array<IImage> = [];
  constructor() {
    this.subject = new Subject();
  }

  public ResetItems (items: Array<IImage> = []) {
    this.items = items;
    this.subject.next(this.items);
  }

  public GetSubsriber (): Observable<any> {
    return this.subject.asObservable();
  }
  public DeleteItem(image: IImage) {
    this.items =  this.items.filter(x => x.id !== image.id);
    this.subject.next(this.items);
  }
  public UpdateItem(image: IImage) {
    this.items = this.items.map(item => {
      if (item.id === image.id) {
        return merge(item, image);
      }
      return item;
    });
    this.subject.next(this.items);
  }
  public CreateItem(image: IImage) {
    this.items = [image].concat(this.items);
    this.subject.next(this.items);
    this.subject.next(this.items);
  }
}
