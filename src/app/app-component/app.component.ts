import { Component } from '@angular/core';
import { PublicService } from '../ng-media/services/public.service';
import { IInteractionType } from '../ng-media/interfaces/definitions';

declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logo = require('./image.svg');
  title = 'app';

  constructor (
    private pub: PublicService,
  ) {

  }
  openDialog () {
    const ref = this.pub.open({
      interactionType: IInteractionType.SingleSelect
    });
    ref.afterClose().subscribe((result) => {
      console.log('selected: ', result);
    });
  }
}
