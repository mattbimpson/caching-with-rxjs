import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { of, Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

interface ProductResponse {
  type: string;
  value: Array<Product>;
}

const CACHE_SIZE = 1;

@Injectable()
export class ProductService {
  private cache$: Observable<Array<Product>>;

  constructor() {}

  get products() {
    debugger;
    if (!this.cache$) {
      this.cache$ = this.requestProducts().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  private requestProducts() {
    return of<ProductResponse>({
      type: '',
      value: [
        { id: 0, name: 'apples', description: 'some apples'},
        { id: 1, name: 'bread', description: 'one loaf'}
      ]
    }).pipe(
      map(response => response.value)
    );
  }
}
