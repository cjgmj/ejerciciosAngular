import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Mensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  chats: Mensaje[] = [];
  usuario: any = {};

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( user => {
    console.log(user);
    if (!user) {
      return;
    }

    this.usuario.nombre = user.displayName;
    this.usuario.uid = user.uid;
  } );
  }

  login(cuenta: string) {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(5));

    return this.itemsCollection.valueChanges().pipe(map((mensajes: Mensaje[]) => {
      this.chats = [];

      for ( const mensaje of mensajes ) {
        this.chats.unshift(mensaje);
      }

      return this.chats;
    }));
  }

  agregarMensaje(texto: string) {
    const mensaje: Mensaje = {
      nombre: 'Nombre',
      mensaje: texto,
      fecha: new Date().getTime()
    };

    return this.itemsCollection.add(mensaje);
  }
}
