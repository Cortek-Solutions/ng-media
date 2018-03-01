import { Component, OnInit } from '@angular/core';
import { IInteractionType, IImage, IDialogConfiguration } from '../../interfaces/definitions';

@Component({
  selector: 'app-ng-media-selector',
  templateUrl: './ng-media-selector.component.html',
  styleUrls: ['./ng-media-selector.component.scss']
})
export class NgMediaSelectorComponent implements OnInit {
  public _ref: any;
  public config: IDialogConfiguration = null;
  public subject: any = null;
  public selectedItems: Array<IImage> = [];
  constructor() { }

  public updateSelection (items: Array<IImage> = []) {
    this.selectedItems = items.filter(x => {
      return x.$meta.selected;
    });
  }
  public GetInteractionType () {
    return this.config.interactionType || IInteractionType.SingleSelect;
  }
  ngOnInit() {
    if (!this.config) {
      this.config = {};
    }
  }
  close(e) {
    if (e.target === e.currentTarget) {
      this._ref.destroy();
    }
  }
  public CloseDialog () {
    this.subject.next(this.selectedItems);
    this._ref.destroy();
  }
}
