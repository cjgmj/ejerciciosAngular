import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: Heroe = null;
  @Input() i: number;

  @Output() heroeSelected: EventEmitter<number>;

  constructor( private router: Router ) {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    // this.router.navigate( ['/heroe', this.i] );
    this.heroeSelected.emit( this.i );
  }

}
