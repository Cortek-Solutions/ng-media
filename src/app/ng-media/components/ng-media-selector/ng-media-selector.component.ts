import { Component, OnInit } from '@angular/core';
import { IInteractionType, IImage } from '../../interfaces/definitions';

@Component({
  selector: 'app-ng-media-selector',
  templateUrl: './ng-media-selector.component.html',
  styleUrls: ['./ng-media-selector.component.scss']
})
export class NgMediaSelectorComponent implements OnInit {
  public _ref: any;

  public selectedItems: Array<IImage> = [];
  constructor() { }

  public updateSelection (items: Array<IImage> = []) {
    this.selectedItems = items.filter(x => {
      return x.$meta.selected;
    });
  }
  public SingleSelector () {
    return IInteractionType.SingleSelect;
  }
  public MultipleSelector () {
    return IInteractionType.MultipleSelect;
  }
  ngOnInit() {
  }
  close(e) {
    if (e.target === e.currentTarget) {
      this._ref.destroy();
    }
  }

}
