import { Component } from '@angular/core';
import { PublicService } from '../../services/public.service';
import { IInteractionType, IImage } from '../../interfaces/definitions';
import { StoreService } from '../../services/store.service';
import { Storage } from '../../services/storage';
import mocks from '../../mocks';

@Component({
  selector: 'app-ng-media',
  templateUrl: './ng-media.component.html',
  styleUrls: ['./ng-media.component.scss']
})
export class NgMediaComponent {

  private storage: Storage = null;

  constructor (
    private _pub: PublicService,
    private store: StoreService,
  ) {
    this.storage = this.store.CreateStorage();  
  }

  /**
   * @description It will reset all images inside this gallery. If you provide an array of items,
   * they will be replaced.
   */
  public ResetItems (items: Array<IImage> = []) {
    console.warn('items:', this.storage);
    this.storage.ResetItems(mocks as any);
  }
}
