import { Component, OnInit } from '@angular/core';
import { LoginRegService } from '../login-reg.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: LoginRegService) { }
  // firstName: string;
  // lastName: string;
  id: string;
  currentUser: object[];

  ngOnInit() {
    // this.firstName = sessionStorage.getItem('user.firstName');
    // this.lastName = sessionStorage.getItem('user.lastName');
    this.id = sessionStorage.getItem('user.id');
    this.userService.getOneUser(parseInt(this.id)).subscribe(data => {
      this.currentUser = data;
      console.log(this.currentUser)
    });
  }
  onClick() {
    sessionStorage.clear();
  }

}
