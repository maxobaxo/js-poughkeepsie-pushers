import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [PlayerService]
})

export class ListComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  addingNewPlayer = false;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToDetailPage(clickedPlayer) {
    this.router.navigate(['players', clickedPlayer.$key]);
  }

  showAddPlayerForm() {
    this.addingNewPlayer = true;
  }

  submitForm(name: string, age: number, position: string, hometown: string, pic: string) {
    var newPlayer = new Player(name, age, position, hometown, pic);
    this.playerService.addNewPlayer(newPlayer);
    this.addingNewPlayer = false;
  }

}
