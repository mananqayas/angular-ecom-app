import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // getCartItems(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl);
  // }

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl + '/cart', product);
  }

  getCartitems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/cart');
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/cart');
  }

  checkout(cartitems: Product[]): Observable<void> {
    return this.http.post<void>(this.apiUrl + '/checkout', cartitems);
  }
}
