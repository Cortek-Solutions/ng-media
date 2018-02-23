import { Component, ViewChild, ElementRef } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { Store } from '@ngrx/store';
import { AppState, IImage } from '../../interfaces/definitions';
declare var require: any;
const uuid = require('uuid/v1');

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  @ViewChild('inputFile') fileuploader: ElementRef;
  public active = false;
  public progressIsActive = false;
  public windowUploader = false;
  public progressPrecent: Number;

  constructor(
    private _ub: UploaderService,
    private store: Store<AppState>,
  ) { }

  activeUploader() {
    this.active = this.active ? false : true;
  }

  uploader() {
    const files = this.fileuploader.nativeElement.files;
    this.uploadHandler(files);
  }

  // @todo check for lack of memory
  uploadHandler(files) {
    const filesCount = files.length;
    // let fileIndex = 0;
    for (const _file of files) {
      this.progressPrecent = 0;
      this.progressIsActive = true;
      const file: File = _file;
      const img = new Image;
      let width = 0,
            height = 0;
      const reader: FileReader = new FileReader();
      reader.onloadend = (e) => {
        img.src = reader.result;
        img.onload = () => {
          width = img.width;
          height = img.height;
          this.store.dispatch({
            type: 'ADD_NEW_ITEM',
            payload: {
              id: uuid(),
              src: reader.result,
              name: file.name,
              size: file.size,
              type: file.type,
              width: width,
              height: height,
              createdDate: new Date(),
              updatedDate: new Date(),
              uploadedBy: 'Admin'
            } as IImage
          });
        };
        // fileIndex++;
        // this.progressPrecent = (fileIndex / filesCount) * 100;
        // if (fileIndex === filesCount) {
        //   this.progressIsActive = false;
        // }
      };
      reader.readAsDataURL(file);
    }
  }

  eventHandler(e) {
    const ele = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - ele.left;
    const y = e.clientY - ele.top;
    switch (e.type) {
      case 'dragover':
        e.preventDefault();
      break;
      case 'dragenter':
        e.preventDefault();
        this.windowUploader = true;
      break;
      case 'dragleave':
        if (x >= ele.width || y >= ele.height || x < 0 || y < 0) {
          this.windowUploader = false;
        }
      break;
    }
  }

  setToFileUploader(e) {
    e.preventDefault();
    this.windowUploader = false;
    this.uploadHandler(e.dataTransfer.files);
  }
}
