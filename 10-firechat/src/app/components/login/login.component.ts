import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor(private _chatService: ChatService) { }

  acceder(cuenta: string) {
    this._chatService.login(cuenta);
  }

}
