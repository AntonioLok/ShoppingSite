import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user : User = {username: "", password: "", productsSelected: []};
  message : any;
  incorrect = false;

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private router: Router,
    private flashMessage : FlashMessagesService 
  ) { }

  ngOnInit() {
  } 
  //this.productService.productsCheckOut

  onSubmit() {
    this.userService.login(this.user).subscribe(data => { 
      if(data.success == true) {
        this.flashMessage.show("You are logged in!", {
          cssClass: 'alert-success',
          timeout: 2000});
        this.userService.loggedIn = true;
        this.productService.productsCheckOut = data.cart;
        localStorage.setItem('currentUser', document.cookie);
        this.router.navigate(['/home']);
        } else {
        this.incorrect = true;
        this.message = data.message;
      }
    });
  }

}
