import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderService } from './services/uploader.service';
import { NgMediaComponent } from './components/ng-media/ng-media.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { UploadComponent } from './components/upload/upload.component';
import { MediaToolbarComponent } from './components/media-toolbar/media-toolbar.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgMediaComponent,
    CanvasComponent,
    UploadComponent,
    MediaToolbarComponent,
    GridViewComponent
  ],
  providers: [UploaderService],
  exports: [
    NgMediaComponent
  ]
})
export class NgMediaModuleModule { }
