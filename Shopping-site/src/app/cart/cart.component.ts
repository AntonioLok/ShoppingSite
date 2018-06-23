import { Component, OnInit} from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  amountOption = [1, 2, 3, 4 ,5, 6, 7];
  total : number;

  constructor(
    private productService : ProductService,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.getCart();
  }

  getTotal(): number {
    let totalSoFar : number = 0;
    for (let product of this.productService.productsCheckOut) {
      totalSoFar = totalSoFar + (product.price * product.amount);
    }
    return totalSoFar;
  }

  selectChangeHandler(value : any, product : Product) { 
    let index = this.productService.productsCheckOut.indexOf(product)
    product.amount = value;
    this.productService.productsCheckOut[index ] = product;
    this.total = this.getTotal();
  }

  delete(product: Product) {
    this.productService.productsCheckOut = this.productService.productsCheckOut.filter(
      p => !(p._id == product._id && p.sizeSelected == product.sizeSelected)      
    );


    if (this.userService.loggedIn == true) {
      this.userService.updateCart(this.productService.productsCheckOut).subscribe(data => console.log(data.message));
    } else {
      localStorage.setItem("cart", JSON.stringify(this.productService.productsCheckOut));
    }
    this.total = this.getTotal();
  }


  getCart() {
    if (this.userService.loggedIn == true) {
      this.userService.getUserCart(document.cookie.split("username=")[1])
        .subscribe(data => {
        this.productService.productsCheckOut = data.userCart;
        console.log(this.productService.productsCheckOut);
        this.total = this.getTotal();
      });
    } else {
      this.total = this.getTotal();
      if (localStorage.getItem("cart") != null && localStorage.getItem("cart") != "") {
        this.productService.productsCheckOut = JSON.parse(localStorage.getItem("cart"));
      } else {
        this.productService.productsCheckOut = [];
      }
    }
  }

}
