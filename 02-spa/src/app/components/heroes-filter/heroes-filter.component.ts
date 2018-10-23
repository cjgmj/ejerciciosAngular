import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-filter',
  templateUrl: './heroes-filter.component.html'
})
export class HeroesFilterComponent implements OnInit {

  heroes: Heroe[] = [];
  texto: string;

  constructor(  private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private router: Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.texto = params['text'];
      this.heroes = this._heroesService.buscarHeroes( this.texto );
    } );
  }

  verHeroe(i: number) {
    this.router.navigate( ['/heroe', i] );
  }

}
