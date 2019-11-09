import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData = {
    username: '',
    password: ''
  };
  passwordRepeat = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  registerUser() {
    if (this.userData.password === this.passwordRepeat) {
      console.log('Sending user data to registration service');
      this.auth.registerUser(this.userData).subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        err => console.log(err)
      );
    }
  }
}
