import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UploaderService {
  public uploaderBridge: EventEmitter<any> = new EventEmitter();
}
