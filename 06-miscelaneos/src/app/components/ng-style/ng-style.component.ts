import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ 'font-size': size + 'px' }">
      Texto ngStyle
    </p>
    <p [style.fontSize]="size + 'px'">
      Texto style.fontSize
    </p>
    <p [style.fontSize.px]="size">
      Texto style.fontSize.px
    </p>

    <button class="btn btn-primary mr-2" (click)="size = size + 5">
      <i class="fas fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="size = size - 5">
      <i class="fas fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size = 10;

  constructor() { }

  ngOnInit() {
  }

}
