import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user : User = {username: "", password: "", productsSelected: []};
  confirmationPassword = "";
  passwordConfirmationFailed = false;
  accountExistAlready = false;

  constructor(private userService: UserService, private router: Router) {  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.user.password === this.confirmationPassword) {
      this.passwordConfirmationFailed = false;
      this.userService.register(this.user).subscribe(data => {
        if (data.success == false) {
          this.accountExistAlready = true;          
        } else {
          this.router.navigate(['/log-in']);
        }
      });
    } else {
      this.passwordConfirmationFailed = true;
      this.accountExistAlready = false;
    }
  }

}
