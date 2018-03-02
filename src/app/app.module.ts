import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMediaModule } from './ng-media/ng-media-module.module';
import { AppComponent } from './app-component/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMediaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
