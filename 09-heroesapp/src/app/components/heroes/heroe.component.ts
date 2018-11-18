import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    editora: 'Marvel',
    biografia: ''
  };

  constructor( private _heroeService: HeroesService, private router: Router ) { }

  ngOnInit() {
  }

  guardar() {
    this._heroeService.nuevoHeroe(this.heroe).subscribe( data => {
      this.router.navigate(['/heroe', data.name]);
    }, error => {
      console.log(error);
    });
  }

}
