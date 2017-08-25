import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { MessageService } from '../message.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [MessageService]
})
export class ForumComponent implements OnInit {
  messages: FirebaseListObservable<any[]>;
  currentRoute = this.router.url;
  addingNewMessage = false;

  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

  showAddMessageForm() {
    this.addingNewMessage = true;
  }

  createTimestamp() {
    var now = new Date();
    var timestamp = now.getDate().toString() + "." + now.getMonth().toString() + "." + now.getFullYear().toString();
    return timestamp
  }

  submitForm(author: string, content: string, date: string) {
    var newMessage = new Message(author, content, date);
    this.messageService.addNewMessage(newMessage);
    this.addingNewMessage = false;
  }

  beginDeletingMessage(selectedMessage) {
    this.messageService.deleteMessage(selectedMessage);
  }

}
