import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { of, Observable, timer } from 'rxjs';
import { shareReplay, map, switchMap } from 'rxjs/operators';

interface ProductResponse {
  type: string;
  value: Array<Product>;
}

const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000;

@Injectable()
export class ProductService {
  private cache$: Observable<Array<Product>>;

  constructor() {}

  get products() {
    if (!this.cache$) {
      // Use timer to periodically refresh our cache
      const timer$ = timer(0, REFRESH_INTERVAL);
      this.cache$ = timer$.pipe(
        switchMap(_ => this.requestProducts()),
        shareReplay(CACHE_SIZE)
      );
      // Or without timer:
      // this.cache$ = this.requestProducts().pipe(
      //   shareReplay(CACHE_SIZE)
      // );
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
