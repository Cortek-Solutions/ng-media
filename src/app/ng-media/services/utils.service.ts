import { Injectable } from '@angular/core';

/**
 * Keeps a value between two numbers, based on min and max
 */
function keepBetween(value: number, min: number = 0, max: number = 1): number {
  if (value > max) {
    return max;
  }
  if ( value < min) {
    return min;
  }
  return value;
}
@Injectable()
export class UtilsService {

  public drawImageProp (ctx, img, x, y, w, h, defaultOffsetX = 0.5, defaultOffsetY = 0.5) {

    const [ offsetX, offsetY ] = [keepBetween(defaultOffsetX), keepBetween(defaultOffsetY)];
    const iw = img.width, ih = img.height, r = Math.min(w / iw, h / ih);
    let nw = iw * r, nh = ih * r, cx, cy, cw, ch, ar = 1;

    // decide which gap to fill
    if (nw < w) {
      ar = w / nw;
    }
    if (Math.abs(ar - 1) < 1e-14 && nh < h) { ar = h / nh; }  // updated
    nw *= ar;
    nh *= ar;

    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    if (cx < 0) { cx = 0; }
    if (cy < 0) { cy = 0; }
    if (cw > iw) { cw = iw; }
    if (ch > ih) { ch = ih; }

    ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
  }

}
