import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baserUrl= "http://localhost:8080/api/products";
  private categoryUrl= "http://localhost:8080/api/product-category"

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {
    // @Todo: need to build Url Based on category id 
    const searchUrl= `${this.baserUrl}/search/findByCategoryId?id=${theCategoryId}`;
   
   
    return this.getProduct(searchUrl);  
   
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

  searchProducts(theKeyWord: string): Observable<Product[]>{
    const searchUrl= `${this.baserUrl}/search/findByNameContaining?name=${theKeyWord}`
    return this.getProduct(searchUrl);  
  }

   


  private getProduct(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}
  interface GetResponseProducts{ 
_embedded: {
  products: Product[];
  
}}

interface GetResponseProductCategory{ 
  _embedded: {
    productCategory: ProductCategory[];
    
  }
}


