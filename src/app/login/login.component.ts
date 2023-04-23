import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = 'saloni'
  password = '12345'
  invalidLogin = false
  errorMessage = 'Invalid Credentials'

  constructor(private router: Router) {}

  handleLogin() {
    if(this.username==="saloni" && this.password==="12345") {
      //redirect to loan-plans page
      this.router.navigate(['/newrequest'])
      this.invalidLogin=false;
    }
    else {
      this.invalidLogin=true;
    }
  }
}
