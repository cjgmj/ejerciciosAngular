import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: Heroe = null;
  @Input() i: number;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate( ['/heroe', this.i] );
  }

}
