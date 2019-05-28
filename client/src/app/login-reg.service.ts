import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginRegService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8000/api';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  createUser(user: User): void {
    console.log(user.firstName);
    this.http.post<User>(`${this.baseUrl}/createuser/`, user).subscribe(data => {
      console.log(data);
    });
  }
}
