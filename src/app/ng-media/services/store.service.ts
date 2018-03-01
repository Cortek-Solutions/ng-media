import { Injectable } from '@angular/core';
import { IImage } from '../interfaces/definitions';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

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
}
