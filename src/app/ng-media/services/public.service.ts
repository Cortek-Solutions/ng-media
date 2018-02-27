import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { IImage } from '../interfaces/definitions';
import { GridViewComponent } from '../components/grid-view/grid-view.component';

@Injectable()
export class PublicService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  public open (item: IImage) {
    const componentRef = this.resolver.resolveComponentFactory(GridViewComponent);
    const panel = componentRef.create(this.injector);
    this.appRef.attachView(panel.hostView);
    const domElm = (panel.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElm);
    // panel.instance.image = item;
    // panel.instance.appRef = this.appRef;
    // panel.instance._ref = panel;
  }
}
