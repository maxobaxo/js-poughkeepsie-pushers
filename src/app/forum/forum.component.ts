import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [MessageService, PlayerService]
})

export class ForumComponent implements OnInit {
  messages: FirebaseListObservable<any[]>;
  players: FirebaseListObservable<any[]>;

  currentRoute = this.router.url;
  addingNewMessage = false;
  timestamp = new Date();

  constructor(private router: Router, private messageService: MessageService, private playerService: PlayerService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.players = this.playerService.getPlayers();
  }

  showAddMessageForm() {
    this.addingNewMessage = true;
    // console.log(this.messages);
    // console.log(this.players);
  }

  submitForm(author: string, content: string, date: string) {
    var day = this.timestamp.getDate().toString();
    var month = this.timestamp.getMonth().toString();
    var year = this.timestamp.getFullYear().toString();

    var hours = this.timestamp.getHours();
    var minutes = this.timestamp.getMinutes();
    var ampm = hours>= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? 0+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;

    date = month + "/" + day + "/" + year + ', ' + strTime;
    var newMessage = new Message(author, content, date);
    this.messageService.addNewMessage(newMessage);
    this.addingNewMessage = false;
  }

  beginDeletingMessage(selectedMessage) {
    this.messageService.deleteMessage(selectedMessage);
  }

}
