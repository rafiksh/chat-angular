import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

import { SOCKET_ENDPOINT } from 'src/config/config.env';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss'],
})
export class ChatInboxComponent implements OnInit {
  socket: any;
  message: any;

  constructor() {}

  ngOnInit(): void {
    this.setupSocketConnection();
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('chat', (data: any) => {
      console.log(data.message);
      if (data.message) {
        const element = document.createElement('li');
        element.innerHTML = data.message;
        element.style.background = 'white';
        element.style.padding = '15px 30px';
        element.style.margin = '10px';
        document.getElementById('message-list')?.appendChild(element);
      }
    });
  }
  SendMessage() {
    this.socket.emit('chat', { message: this.message, handle: 'MR' });
    const element = document.createElement('li');
    element.innerHTML = this.message;
    element.style.background = 'white';
    element.style.padding = '15px 30px';
    element.style.margin = '10px';
    element.style.textAlign = 'right';
    document.getElementById('message-list')?.appendChild(element);
    this.message = '';
  }
}
