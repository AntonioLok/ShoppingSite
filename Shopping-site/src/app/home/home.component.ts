import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menProducts;
  womenProducts;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts("men");
    this.getProducts("women");
  }

  getProducts(category : string) {
    this.productService.getProducts().subscribe(data => 
      { if (category == "men") {
          this.menProducts = data.data.filter(product => product.category == category);
          this.menProducts = this.menProducts.slice(this.menProducts.length - 8)
        } else if (category == "women") {
          this.womenProducts = data.data.filter(product => product.category == category);
          this.womenProducts = this.womenProducts.slice(this.womenProducts.length - 8)
      }
    });
  }
}
