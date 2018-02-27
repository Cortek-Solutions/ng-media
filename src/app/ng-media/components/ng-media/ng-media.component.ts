import { Component } from '@angular/core';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'app-ng-media',
  templateUrl: './ng-media.component.html',
  styleUrls: ['./ng-media.component.scss']
})
export class NgMediaComponent {

  constructor (
    private _pub: PublicService,
  ) {
  }
  public openSelector () {
    this._pub.open(null);
  }
}
