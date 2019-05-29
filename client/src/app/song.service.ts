import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Song} from './song';
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8000/api';

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}/getSongs/`);
  }

  createSong(song: Song) {
    console.log(song.title, song.artist, this.baseUrl);
    return this.http.post<Song>(`${this.baseUrl}/createsong/`, song);
  }

  addToPlaylist(song: number, user: number) {
    console.log('hiiii');
    return this.http.post<Song>(`${this.baseUrl}/addtoplaylist/`, {song, user});
  }

  getUserSongs(user: number): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}/getusersongs/${user}/`);
  }
  getOneSong(song: number): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}/getOneSong/${song}/`);
  }
  getSongCount(song: number): Observable<object[]> {
    return this.http.get<object[]>(`${this.baseUrl}/getsongcount/${song}`);
  }
}
