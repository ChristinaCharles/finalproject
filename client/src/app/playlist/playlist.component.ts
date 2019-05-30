import {Component, OnInit} from '@angular/core';
import {SongService} from '../song.service';
import { ActivatedRoute } from '@angular/router';
import { LoginRegService } from '../login-reg.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  // firstName: string;
  // lastName: string;
  userSongs = [];
  userId: number;
  currentUser: object[];

  // songCount: number[];

  constructor(private songService: SongService, private route: ActivatedRoute, private userService: LoginRegService) {
    this.route.params.subscribe( params => this.userId = params.id );
  }

  ngOnInit() {
    // this.firstName = sessionStorage.getItem('user.firstName');
    // this.lastName = sessionStorage.getItem('user.lastName');
    this.songService.getUserSongs(this.userId).subscribe(data => {
      Object.values(data).forEach(song => this.userSongs.push(song));
    });
    this.userService.getOneUser(this.userId).subscribe(data => this.currentUser = data);
    console.log(this.currentUser);
  }
}
