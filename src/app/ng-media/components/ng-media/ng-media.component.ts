import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IImage, AppState } from '../../../definitions';


@Component({
  selector: 'app-ng-media',
  templateUrl: './ng-media.component.html',
  styleUrls: ['./ng-media.component.scss']
})
export class NgMediaComponent {
  public images: Array<any> = [];

  constructor(
    private store: Store<AppState>,
  ) {

  }
}
