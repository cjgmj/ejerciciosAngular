import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styles: []
})
export class MapaEditarComponent implements OnInit {

  formulario: FormGroup;

  constructor( private dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any, private formBuilder: FormBuilder ) {
      this.formulario = this.formBuilder.group({
        'titulo': this.data.titulo,
        'desc': this.data.desc
      });
    }

  ngOnInit() {
  }

  guardarCambios() {
    this.dialogRef.close(this.formulario.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
