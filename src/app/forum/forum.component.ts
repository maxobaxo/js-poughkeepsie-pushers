import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
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
  addingNewMessage = false;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

  showAddMessageForm() {
    this.addingNewMessage = true;
  }

  submitForm(author: string, content: string, date: string) {
    var newMessage = new Message(author, content, date);
    this.messageService.addNewMessage(newMessage);
    this.addingNewMessage = false;
  }

}
