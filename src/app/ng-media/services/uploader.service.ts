import { Injectable, EventEmitter } from '@angular/core';
import { IEvent } from '../interfaces/definitions';
@Injectable()
export class UploaderService {
  public photoSelector: EventEmitter<any> = new EventEmitter();
  public events: EventEmitter<IEvent> = new EventEmitter();
}
