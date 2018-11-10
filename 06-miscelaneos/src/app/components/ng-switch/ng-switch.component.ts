import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  alerta = 'danger';
  alertas = ['info', 'success', 'warning', 'danger'];
  cont = 0;

  constructor() { }

  ngOnInit() {
  }

  cambiarAlerta() {
    this.alerta = this.alertas[this.cont];

    this.cont++;

    if (this.cont === this.alertas.length) {
      this.cont = 0;
    }
  }

}
