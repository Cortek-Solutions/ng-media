import { Component, ViewChild, ElementRef } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';

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

  constructor(private _ub: UploaderService) { }

  activeUploader() {
    this.active = this.active ? false : true;
  }

  uploader() {
    const files = this.fileuploader.nativeElement.files;
    this.uploadHandler(files);
  }

  uploadHandler(files) {
    const _self = this;
    const filesCount = files.length;
    let fileIndex = 0;
    for (const _file of files) {
      _self.progressPrecent = 0;
      _self.progressIsActive = true;
      const file: File = _file;
      const reader: FileReader = new FileReader();
      reader.onloadend = (e) => {
        _self._ub.uploaderBridge.emit({
          src: reader.result,
          name: file.name,
        });
        fileIndex++;
        _self.progressPrecent = (fileIndex / filesCount) * 100;
        if (fileIndex === filesCount) {
          _self.progressIsActive = false;
        }
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
