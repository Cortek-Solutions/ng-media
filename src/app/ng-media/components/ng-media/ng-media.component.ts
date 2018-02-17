import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-media',
  templateUrl: './ng-media.component.html',
  styleUrls: ['./ng-media.component.scss']
})
export class NgMediaComponent {
  public images: Array<any> = [];

  constructor() { }
}
