import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginRegService } from '../login-reg.service';
import { User } from '../user';
import { Router} from "@angular/router";
import { loginUser } from '../loginUser';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})

export class LoginRegComponent implements OnInit {
  newUser: User = new User();
  loginUser: loginUser = new loginUser();

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newUser);
    this.LoginRegService.createUser(this.newUser);
    this.router.navigate(['/songs']);
    // event.preventDefault();
    // console.log("This is the form", form)
  }
  onLogin() {
    this.LoginRegService.loginUser(this.loginUser);
    this.router.navigate(['/songs']);
  }

  constructor(private LoginRegService: LoginRegService, private router: Router) { }
}
