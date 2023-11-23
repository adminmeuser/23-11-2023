import { Directive, ElementRef, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef, private renderer: Renderer2) { 
  console.log(this.el)   
}

@HostListener('mouseenter') onMouseEnter() {
  this.highlighter();

}

@HostListener('mouseenter') onMouseLeave() {
  this.highlighter();

}

private highlighter() {
  this.renderer.addClass(this.el.nativeElement, 'hover-effect');
}


}

