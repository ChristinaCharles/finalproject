import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  firstName: string;
  lastName: string;
  id: string;

  ngOnInit() {
    this.firstName = sessionStorage.getItem('user.firstName');
    this.lastName = sessionStorage.getItem('user.lastName');
    this.id = sessionStorage.getItem('user.id');
  }
  onClick() {
    sessionStorage.clear();
  }

}
