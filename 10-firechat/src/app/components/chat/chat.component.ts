import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  mensaje = '';

  constructor(public _chatservice: ChatService) {
    this._chatservice.cargarMensajes().subscribe();
  }

  enviarMensaje() {
    if (this.mensaje.length === 0) {
      return;
    }

    this._chatservice.agregarMensaje(this.mensaje)
                      .then( () => {console.log('Mensaje enviado');
                        this.mensaje = '';
                      })
                      .catch((err) => console.error('Error al enviar', err));
  }

}
