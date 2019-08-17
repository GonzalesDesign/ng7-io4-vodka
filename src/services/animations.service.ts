import { Injectable } from '@angular/core';
import {
	TweenMax,
	TimelineMax,
	ScrollToPlugin,
	CSSPlugin,
	Power2,
	Elastic
} from 'gsap/all';

@Injectable({
	providedIn: 'root'
})
export class AnimationsService {
	public tL = new TimelineMax();
	public tMx = TweenMax;
	public plugins = [CSSPlugin, ScrollToPlugin];

	constructor() {}

	public fAnimYPos(elem, yp) {
		this.tMx.to(elem, .25, {y: yp, ease: Power2.easeOut, delay: 0});
		console.log('anim service: ', elem, yp);
	}

	public fTranslateAnim( elem, tym = 1000, xp, yp, zp = 100, w, h?: any, sizeFont?: any, alfa = 1 ) {
		// const elemId = elem;
		this.tMx.to(elem, tym, { x: xp, y: yp, zIndex: zp, width: w, height: h, fontSize: sizeFont, opacity: alfa, ease: Power2.easeOut, delay: 0.5 });
		// if (alfa === 0){
		//   visibility: hidden;
		// } else {
		//   visibility: visible;
		// }
		// .from(e2, 2, { y: -100, alpha: 0, ease: Elastic.easeOut, delay: 1 });
	}
}
