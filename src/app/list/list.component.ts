import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor() { }

  ngOnInit() {
  }

}
