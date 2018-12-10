import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  constructor( private db: AngularFirestore ) { }

  cargarImagenesFirebase( imagenes: FileItem[] ) {
    const storageRef = firebase.storage().ref();

    for ( const item of imagenes ) {
      item.loading = true;
      if ( item.progreso >= 100 ) {
        continue;
      }

       const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).put(item.archivo);
       uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Error al subir', error),
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
            item.url = downloadURL;

            item.loading = false;
            this.guardarImagen({
              nombre: item.nombreArchivo,
              url: item.url
            });
            console.log('Imagen cargada correctamente');
          });
        });
    }
  }

  private guardarImagen( imagen: {
    nombre: string,
    url: string
  } ) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }
}
