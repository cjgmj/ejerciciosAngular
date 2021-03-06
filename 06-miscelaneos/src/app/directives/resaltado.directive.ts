import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef ) {
  }

  @Input('appResaltado') color: string;

  @HostListener('mouseenter') cursorDentro() {
    this.resaltar(this.color || 'yellow');
  }

  @HostListener('mouseleave') cursorFuera() {
    this.resaltar(null);
  }

  private resaltar( color: string ) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
