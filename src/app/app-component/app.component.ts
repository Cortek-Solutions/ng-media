import { Component, ViewChild } from '@angular/core';
import { PublicService } from '../ng-media/services/public.service';
import { IInteractionType } from '../ng-media/interfaces/definitions';
import { NgMediaComponent } from '../ng-media/components/ng-media/ng-media.component';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logo = require('./image.svg');
  title = 'app';

  @ViewChild("gallery1") gallery1: NgMediaComponent;

  constructor (
    private pub: PublicService,
  ) {

  }
  public update () {
    this.gallery1.ResetItems();
  }
  openDialog () {
    const ref = this.pub.open({
      interactionType: IInteractionType.SingleSelect,
      storage: this.gallery1.GetStorage()
    });
    ref.afterClose().subscribe((result) => {
      console.log('selected: ', result);
    });
  }
}
