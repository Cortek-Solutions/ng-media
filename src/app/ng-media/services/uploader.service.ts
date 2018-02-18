import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UploaderService {
  public photoSelector: EventEmitter<any> = new EventEmitter();
}
