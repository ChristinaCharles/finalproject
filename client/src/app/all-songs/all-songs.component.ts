import {Component, OnInit} from '@angular/core';
import {SongService} from '../song.service';
import {Song} from '../song';
import { LoginRegService } from '../login-reg.service';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.css']
})
export class AllSongsComponent implements OnInit {
  allSongs: object[];
  newSong: Song = new Song();
  id: number;
  currentUser: object[];


  constructor(private songService: SongService, private userService: LoginRegService) {
  }

  ngOnInit() {
    this.userService.getOneUser(parseInt(sessionStorage.getItem('user.id'))).subscribe(data => { 
      this.currentUser = data;
    })
    this.id = parseInt(sessionStorage.getItem('user.id'));
    this.songService.getSongs().subscribe(data => {
      this.allSongs = data;
      console.log(data);
    });
  }

  onSubmit() {
    this.songService.createSong(this.newSong);
    this.songService.getSongs().subscribe(data => {
      this.allSongs = data;
    });
  }

  onClick(id: number, user: number) {
    console.log(id);
    this.songService.addToPlaylist(id, user).subscribe(data => {
    });
    this.ngOnInit();
    this.songService.getSongs().subscribe(data => {
      this.allSongs = data;
    });
  }

}
