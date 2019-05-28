import { Injectable } from '@angular/core';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  songs: object[] = [
    {
      id: 1,
      title: 'Thriller',
      artist: 'Michael Jackson',
      times_added: 78,
    },
    {
      id: 2,
      title: 'Fly Me to the Moon',
      artist: 'Frank Sinatra',
      times_added: 53,
    },
    {
      id: 3,
      title: 'New York State of Mind',
      artist: 'Billy Joel',
      times_added: 23,
    },
  ];

  constructor() { }

  getUsers() {
    return this.songs;
  }
}
