import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  sidebarVisible: boolean = false;
  mensaje: string  | null  = null;
  openChat() {
    console.log('Abriendo el chat...');
    // Aquí puedes abrir un modal o redirigir a una página de chat
  }
}
