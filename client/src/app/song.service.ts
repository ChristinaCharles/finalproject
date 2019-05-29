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

  createSong(song: Song): void {
    console.log(song.title, this.baseUrl);
    this.http.post<Song>(`${this.baseUrl}/createsong/`, song);
  }

  addToPlaylist(song: number, user: number) {
    console.log('hiiii');
    return this.http.post<Song>(`${this.baseUrl}/addtoplaylist/`, {song, user});
  }

  getUserSongs(user: number): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}/getusersongs/${user}/`);
  }
  // getSongCount(user: number): Observable<number[]> {
  //   return this.http.get<number[]>(`${this.baseUrl}/getsongcount/${user}`);
  // }
}
