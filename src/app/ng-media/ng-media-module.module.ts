import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderService } from './services/uploader.service';
import { NgMediaComponent } from './components/ng-media/ng-media.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { UploadComponent } from './components/upload/upload.component';
import { MediaToolbarComponent } from './components/media-toolbar/media-toolbar.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { MediaDetailsComponent } from './components/media-details/media-details.component';
import { StoreModule } from '@ngrx/store';
import { mediaReducer, mediaSearchReducer } from '../app.reducer';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ mediaItems: mediaReducer,
      searchMediaItems: mediaSearchReducer}),
    FormsModule,
  ],
  declarations: [
    NgMediaComponent,
    CanvasComponent,
    UploadComponent,
    MediaToolbarComponent,
    GridViewComponent,
    MediaDetailsComponent,
    SpinnerComponent
  ],
  providers: [UploaderService],
  exports: [
    NgMediaComponent
  ]
})
export class NgMediaModuleModule { }
