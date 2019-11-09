import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {
    username: '',
    password: ''
  };
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  loginUser() {
    return this.auth.loginUser(this.userData).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }
}
