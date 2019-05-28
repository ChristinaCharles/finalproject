import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginRegService } from '../login-reg.service';
import { User } from '../user';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})

export class LoginRegComponent implements OnInit {
  newUser: User = new User();

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newUser);
    this.LoginRegService.createUser(this.newUser);
    // event.preventDefault();
    // console.log("This is the form", form)
  }

  constructor(private LoginRegService: LoginRegService) { }
}
