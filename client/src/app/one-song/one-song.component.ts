import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-song',
  templateUrl: './one-song.component.html',
  styleUrls: ['./one-song.component.css']
})
export class OneSongComponent implements OnInit {
  oneSong: object[];
  id:number;
  songId:number;
  usersWhoAdded = [];

  constructor(private songService: SongService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => {
      this.songId = params.id });
  }

  ngOnInit() {
    this.id = parseInt(sessionStorage.getItem('user.id'));
    this.songService.getOneSong(this.songId).subscribe(data => {
      this.oneSong = data;
      console.log(this.oneSong)
    });
    this.songService.getSongCount(this.songId).subscribe(data => {
      Object.values(data).forEach(user => this.usersWhoAdded.push(user));
      console.log('**********', this.usersWhoAdded);
    })
  }
}