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

  eliminar( key$: string ) {
    this._heroeService.borrarHeroe(key$).subscribe( data => {
      if (data === null) {
        delete this.heroes[key$];
      }
    }, error => console.log(error));
  }

}
