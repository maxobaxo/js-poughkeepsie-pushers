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

  addNewMessage(newMessage: Message) {
    this.messages.push(newMessage);
  }

  getMessageById(messageId: string) {
    return this.database.object('messages/' + messageId);
  }

  deleteMessage(localMessageToDelete) {
    var messageEntryInFirebase = this.getMessageById(localMessageToDelete.$key);
    messageEntryInFirebase.remove();
  }

}
