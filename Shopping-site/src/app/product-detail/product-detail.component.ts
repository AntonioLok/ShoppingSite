import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService }  from '../user.service';
import { ProductService }  from '../product.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector:  'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  selected: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService,
    private location: Location,
    private router: Router,
    private flashMessage : FlashMessagesService 
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product.data;
        console.log(typeof this.product.sizeAvailable.split(","));
    });
  }

  addToCart(product : Product) {
    this.productService.productsCheckOut.push(product);
    if (this.userService.loggedIn == true) {
      this.userService.updateCart(this.productService.productsCheckOut).subscribe(data => console.log(data.message));
    } else {
      localStorage.setItem("cart", JSON.stringify(this.productService.productsCheckOut));
    }
    this.flashMessage.show("Product added to the cart!", {
          cssClass: 'cart-success',
          timeout: 2000
    });
    this.router.navigate([`./deparment/${product.category}/${product.type}`]);
  }

  selectChangeHandler (value: any) {
    this.product.sizeSelected = value;
    this.product.amount = 1;
  }

  check (product : Product) {
    if (this.product.sizeSelected == undefined) {
      alert("Please select a size first");
    } else {
      this.addToCart(product);
    }
  }

}
