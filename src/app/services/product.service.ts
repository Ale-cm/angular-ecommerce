import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baserUrl= "http://localhost:8080/api/products";

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {
    // @Todo: need to build Url Based on category id 
    const searchUrl= `${this.baserUrl}/search/findByCategoryId?id=${theCategoryId}`;
   
   
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );      
  }
}
  interface GetResponse{ 
_embedded: {
  products: Product[];
  
}

  }


