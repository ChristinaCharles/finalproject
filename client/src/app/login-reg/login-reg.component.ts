import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginRegService } from '../login-reg.service';
import { User } from '../user';
import { Router} from "@angular/router";

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
    this.router.navigate(['/songs']);
    // event.preventDefault();
    // console.log("This is the form", form)
  }

  constructor(private LoginRegService: LoginRegService, private router: Router) { }
}
