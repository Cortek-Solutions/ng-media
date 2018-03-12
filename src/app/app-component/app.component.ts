import { Component, ViewChild, OnInit } from '@angular/core';
import { NgMediaService } from '../ng-media/services/public.service';
import { IInteractionType } from '../ng-media/interfaces/definitions';
import { NgMediaComponent } from '../ng-media/components/ng-media/ng-media.component';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  logo = require('./image.svg');
  title = 'app';

  @ViewChild("gallery1") gallery1: NgMediaComponent;

  constructor (
    private pub: NgMediaService,
  ) {

  }
  ngOnInit () {
    this.gallery1.ResetItems();
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
