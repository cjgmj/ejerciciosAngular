import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter( event: any ) {
    this.mouseSobre.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event: any ) {
    this.mouseSobre.emit(false);
  }

  // Validaciones
  private _archivoPuedeSerCargado( archivo: File ): boolean {
    if (!this._archivoYaExiste( archivo.name ) && this.esImagen ( archivo.type )) {
      return true;
    }
    return false;
  }

  private _prevenirYDetener( event ) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoYaExiste( nombreArchivo: string ): boolean {
    for ( const archivo of this.archivos ) {
      if (archivo.nombreArchivo === nombreArchivo ) {
        return true;
      }
    }
    return false;
  }

  private esImagen( tipoArchivo: string ): boolean {
    return ( tipoArchivo === '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
  }

}
