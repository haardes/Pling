import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userData = {
    username: '',
    password: '',
  };
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  loginUser() {
    return this.auth.loginUser(this.userData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/dashboard']);
      },
      err => console.log(err)
    );
  }
}
