import {Component, OnInit} from '@angular/core';
import {SongService} from '../song.service';
import {Song} from '../song';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  firstName: string;
  lastName: string;
  id: string;
  userSongs: object[];
  // songCount: number[];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.firstName = sessionStorage.getItem('user.firstName');
    this.lastName = sessionStorage.getItem('user.lastName');
    this.id = sessionStorage.getItem('user.id');
    this.songService.getUserSongs(parseInt(this.id)).subscribe(data => {
      this.userSongs = data;
    });
    // this.songService.getSongCount(parseInt(this.id)).subscribe( data => {
    //   this.songCount = data;
    // });
  }
}
