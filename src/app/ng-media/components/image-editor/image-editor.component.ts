import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { IImage } from '../../interfaces/definitions';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss']
})
export class ImageEditorComponent implements OnInit {
  @Input('image') image: IImage;

  constructor(private crud: CrudService) { }

  disableEditing(image: IImage) {
    image.$meta.editing = false;
    this.crud.UpdateItem(image);
  }

  ngOnInit() {
  }

}
