import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Message } from './message.model';

@Injectable()
export class MessageService {
  messages: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.messages = database.list('messages');
  }

  getMessages() {
    return this.messages;
  }

}
