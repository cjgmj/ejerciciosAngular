import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];

  constructor( private _heroeService: HeroesService ) {
    this._heroeService.obtenerHeroes().subscribe(data => this.heroes = data);
  }

  ngOnInit() {
  }

}
