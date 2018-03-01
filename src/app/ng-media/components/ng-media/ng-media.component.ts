import { Component } from '@angular/core';
import { PublicService } from '../../services/public.service';
import { IInteractionType } from '../../interfaces/definitions';

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
    const ref = this._pub.open({
      interactionType: IInteractionType.SingleSelect
    });
    ref.afterClose().subscribe((result) => {
      console.log('selected: ', result);
    });
  }
}
