import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.css']
})
export class AllSongsComponent implements OnInit {
 allSongs: object[] = [];

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.allSongs = this.songService.getUsers();
  }

}
