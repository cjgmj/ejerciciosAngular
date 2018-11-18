import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  nuevo = false;
  id: string;

  constructor( private _heroeService: HeroesService, private router: Router, private route: ActivatedRoute ) {
    this.route.params.subscribe( params => {
      this.id = params['id'];

      this.nuevo = this.id === 'nuevo';
    });
  }

  ngOnInit() {
  }

  guardar() {
    if (this.nuevo) {
      this._heroeService.nuevoHeroe(this.heroe).subscribe( data => {
        this.router.navigate(['/heroe', data.name]);
      }, error => {
        console.log(error);
      });
    } else {
      this._heroeService.actualizarHeroe(this.heroe, this.id).subscribe( data => {
      }, error => {
        console.log(error);
      });
    }
  }

}
