import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-toolbar',
  templateUrl: './media-toolbar.component.html',
  styleUrls: ['./media-toolbar.component.scss']
})
export class MediaToolbarComponent implements OnInit {

  private _timer = null;
  public types = [];
  public dates = [];

  constructor() {
    this.types = [
      {
        key: 'all',
        value: 'All'
      },
      {
        key: 'image',
        value: 'Images'
      },
      {
        key: 'audio',
        value: 'Audio'
      },
      {
        key: 'video',
        value: 'Video'
      },
      {
        key: 'others',
        value: 'Other types'
      }
    ];
    this.dates = [
      {
        key: '2018-08',
        value: 'Feb 2018'
      }
    ];
  }

  ngOnInit() {
  }

  public InputChange (value: string) {
    console.log(value);
  }
}
