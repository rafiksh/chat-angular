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

  constructor() {}

  ngOnInit(): void {
    this.setupSocketConnection();
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
  }
}
