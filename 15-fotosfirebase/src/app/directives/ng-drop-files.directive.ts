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
    this._prevenirYDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event: any ) {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop( event: any ) {
    const transferencia = this._getTransferencia(event);

    if (!transferencia) {
      return;
    }

    this._extraerArchivos(transferencia.files);

    this._prevenirYDetener(event);

    this.mouseSobre.emit(false);
  }

  private _getTransferencia( event: any ): any {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extraerArchivos( archivosLista: FileList ) {

    for ( const propiedad of Object.getOwnPropertyNames(archivosLista) ) {
      const archivoTemporal = archivosLista[propiedad];

      if ( this._archivoPuedeSerCargado(archivoTemporal) ) {
        this.archivos.push(new FileItem(archivoTemporal));
      }
    }
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
