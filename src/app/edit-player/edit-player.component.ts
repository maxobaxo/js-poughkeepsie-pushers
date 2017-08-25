import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;

  editingPlayer = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  showEditForm() {
    this.editingPlayer = true;
  }

  beginEditingPlayer(selectedPlayer) {
    this.playerService.editPlayer(selectedPlayer);
  }

}
