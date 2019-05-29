import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {Song} from "./song";


@Injectable({
  providedIn: 'root'
})
export class LoginRegService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8000/api';

  handleLogin(user: User, id: string) {
    sessionStorage.setItem('user.firstName', user.firstName);
    sessionStorage.setItem('user.lastName', user.lastName);
    sessionStorage.setItem('user.id', id);
  }

  createUser(user: User): void {
    console.log(user.firstName);
    this.http.post<User>(`${this.baseUrl}/createuser/`, user).subscribe(data => {
      this.handleLogin(user, data.toString());
    });
  }


}
