import { Component } from '@angular/core';
import { ProductService } from './product.service'; 
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemInBags : number;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private flashMessage : FlashMessagesService 
  ) {}

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    if (this.userService.loggedIn == true) {
      console.log("LOGGEDIN");
      this.userService.getUserCart(document.cookie.split("username=")[1])
        .subscribe(data => {
        this.productService.productsCheckOut = data.userCart;
        //console.log(this.productService.productsCheckOut);
      });
    } else {
      if (localStorage.getItem("cart") != null && localStorage.getItem("cart") != "") {
        this.productService.productsCheckOut = JSON.parse(localStorage.getItem("cart"));
      } else {
        this.productService.productsCheckOut = [];
      }
    }
  }

  logOut() {
    //localStorage.clear();
    this.userService.logout().subscribe(data => {
      this.flashMessage.show(data.message, {
          cssClass: 'alert-logged-out',
          timeout: 2000
      });
      this.userService.loggedIn = false;
      this.getCart();
    });
    this.router.navigate(['/home']);
  }

  display() {
    alert("We are still adding more products. Please check the Women/Men department in the meantime");
  }

}
