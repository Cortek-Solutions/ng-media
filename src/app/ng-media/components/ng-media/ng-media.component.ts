import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-media',
  templateUrl: './ng-media.component.html',
  styleUrls: ['./ng-media.component.scss']
})
export class NgMediaComponent {
  public images: Array<any> = [];

  constructor() { }

  uploader(element: any) {
    const _self = this;
    const files = element.target.files;
    for (const _file of files) {
      const file: File = _file;
      const reader: FileReader = new FileReader();
      reader.onloadend = (e) => {
        _self.images.push({
          src: reader.result,
          name: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  }
}
