import { Component, OnInit } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { Store } from '@ngrx/store';
import { AppState, IImage } from '../../../definitions';
import mocks from '../../mocks';
import { sample, times, random, sortBy, uniqBy } from 'lodash';

@Component({
  selector: 'app-media-toolbar',
  templateUrl: './media-toolbar.component.html',
  styleUrls: ['./media-toolbar.component.scss']
})
export class MediaToolbarComponent implements OnInit {

  public loadingActive = false;
  public loading = false;
  private _timer = null;
  public types = [];
  public dates = [];

  constructor(
    private uploader: UploaderService,
    private store: Store<AppState>,
  ) {
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
    this.store.select('mediaItems').subscribe((images: IImage []) => {
      this.dates = this.findDates(images);
    });
  }


  private findDates (items: IImage[]): Array<{key: string, value: string}> {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dates = [];
    for (const item of items) {
      if ( ! item.date) {
        continue;
      }
      const key = item.date.getFullYear() + '-' + item.date.getMonth();
      dates.push({
        key,
        value: item.date.getFullYear() + ' ' + monthNames[item.date.getMonth()],
      });
    }
    return sortBy(uniqBy(dates, 'key'), 'key');
  }


  public InputChange (value: string) {
    if (!value) {
      this.loading = false;
      clearTimeout(this._timer);
      return this.uploader.events.emit({
        type: 'SEARCH_CLEAR'
      });
    }
    this.uploader.events.emit({
      type: 'SEARCH_START'
    });
    this.loading = true;
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this.actualFetch();
    }, 400);
  }
  public actualFetch () {
    this.loadingActive = true;
    setTimeout(() => {

      times(random(1, 4), () => sample(mocks)).map(x => {
        this.store.dispatch({
          type: 'SEARCH_ADD_NEW_ITEM',
          payload: x
        });
      });
      this.loading = false;
      this.uploader.events.emit({
        type: 'SEARCH_END'
      });
    }, 200);
  }
}
