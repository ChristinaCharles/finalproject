import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import {Song} from '../song';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.css']
})
export class AllSongsComponent implements OnInit {
 allSongs: object[];
 newSong: Song = new Song();

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songService.getSongs().subscribe(data => { this.allSongs = data;
    console.log(data);
    });
  }

  onSubmit() {
    this.songService.createSong(this.newSong);
    this.songService.getSongs().subscribe(data => { this.allSongs = data;
    });
  }

  onClick(id: number) {
    console.log(id);
    this.songService.addToPlaylist(id).subscribe(data => {
    });
    this.songService.getSongs().subscribe(data => { this.allSongs = data;
    });
  }

}
