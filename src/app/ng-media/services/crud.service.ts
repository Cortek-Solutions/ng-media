import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IImage } from '../interfaces/definitions';

@Injectable()
export class CrudService {

  constructor(private store: Store<AppState>) { }

}
