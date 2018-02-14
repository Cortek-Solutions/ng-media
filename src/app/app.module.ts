import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMediaModuleModule } from './ng-media/ng-media-module.module';

import { AppComponent } from './app-component/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMediaModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
