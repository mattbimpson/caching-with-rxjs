import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  products$: Observable<Array<Product>>;

  constructor(private productService: ProductService) { }

  getProducts() {
    this.products$ = this.productService.products;
  }
}
