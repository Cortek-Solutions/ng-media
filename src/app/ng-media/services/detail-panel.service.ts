import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { MediaDetailsComponent } from './../components/media-details/media-details.component';
import { IImage } from '../interfaces/definitions';

@Injectable()
export class DetailPanelService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  showDetaile(item: IImage) {
    const componentRef = this.resolver.resolveComponentFactory(MediaDetailsComponent);
    const panel = componentRef.create(this.injector);
    this.appRef.attachView(panel.hostView);
    const domElm = (panel.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElm);
    panel.instance.image = item;
    panel.instance.appRef = this.appRef;
    panel.instance._ref = panel;
  }
}
