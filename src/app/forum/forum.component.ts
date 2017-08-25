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


  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

}
