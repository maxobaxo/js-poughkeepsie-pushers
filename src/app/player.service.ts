import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  getPlayerById(playerId: string) {
    return this.database.object('players/' + playerId);
  }

  editPlayer(localEditedPlayer) {
    var playerEntryInFirebase = this.getPlayerById(localEditedPlayer.$key);
    playerEntryInFirebase.update({name: localEditedPlayer.name, age: localEditedPlayer.age, position: localEditedPlayer.position, hometown: localEditedPlayer.hometown, pic: localEditedPlayer.pic});
  }
}
