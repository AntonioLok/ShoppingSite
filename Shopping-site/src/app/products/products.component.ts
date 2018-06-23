import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  selectedCategory: String;
  category: string;
  productType: string;
  
  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.category = params['category'];
      this.productType = params['product-type'];
      this.getProducts(this.category, this.productType);
    });
  }

  getProducts(category : string, type : string) {
    this.productService.getProducts().subscribe(data =>
      this.products = data.data.
        filter(product => product.category == category && product.type == type));
  }

}
