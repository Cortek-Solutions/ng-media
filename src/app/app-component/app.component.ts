import { Component, ViewChild, OnInit } from '@angular/core';
import { NgMediaService } from '../ng-media/services/public.service';
import { IInteractionType, IFile, IImage } from '../ng-media/interfaces/definitions';
import { NgMediaComponent } from '../ng-media/components/ng-media/ng-media.component';
declare var require: any;
import mocks from '../ng-media/mocks';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'response-type';
import { environment } from 'environments/environment';

function ConvertToIImage(remoteImage: IFile): IImage {
  return {
    id: remoteImage.id,
    name: remoteImage.filename,
    src: remoteImage.publicUrl
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  logo = require('./image.svg');
  title = 'app';
  public production = environment.production;

  @ViewChild('gallery1') gallery1: NgMediaComponent;

  constructor (
    private pub: NgMediaService,
    private http: HttpClient,
  ) {

  }
  ngOnInit () {
    this.gallery1.ResetItems([
      {
        id: '1',
        name: 'picture',
        src: 'http://rs125.pbsrc.com/albums/p45/sloansteven/arura-1.jpg~c200',

      }
    ]);
    this.http.get('http://localhost:1337/ngmedia/medias').subscribe(
      (response: IResponse<IFile>) => {
        const images = response.data.items;
        this.gallery1.ResetItems(images.map(ConvertToIImage));
      },
      (response) => {
        console.error('Response: ', response);
      }
    );
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
