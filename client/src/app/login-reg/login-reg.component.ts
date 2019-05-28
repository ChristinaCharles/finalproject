import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  newUser: User = new User();

  constructor() { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm ) {
    event.preventDefault();
    console.log("This is the form", form)
  }

}
