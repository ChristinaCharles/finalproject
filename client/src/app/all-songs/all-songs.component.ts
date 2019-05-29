import {Component, OnInit} from '@angular/core';
import {SongService} from '../song.service';
import {Song} from '../song';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.css']
})
export class AllSongsComponent implements OnInit {
  allSongs: object[];
  newSong: Song = new Song();
  id: number;


  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.id = parseInt(sessionStorage.getItem('user.id'));
    this.songService.getSongs().subscribe(data => {
      this.allSongs = data;
      console.log(data);
    });
  }

  onSubmit() {
    // console.log(this.newSong.artist);
    // console.log('this.newSong');
    this.songService.createSong(this.newSong).subscribe(data => {
      
    });
    this.songService.getSongs().subscribe(data => {
      this.allSongs = data;
    });
  }

  onClick(id: number, user: number) {
    console.log(id);
    this.songService.addToPlaylist(id, user).subscribe(data => {
    });
    this.songService.getSongs().subscribe(data => {
      this.allSongs = data;
    });
  }

}
