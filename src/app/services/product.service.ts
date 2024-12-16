import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL_LIST: string = 'http://localhost:8080/maintenance-Api/allProducts';
  API_URL_DETAIL: string = 'http://localhost:8080/maintenance-Api/details';

  constructor(private HttpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this.HttpClient.get(this.API_URL_LIST).pipe((res) => res);
  }

  getProductDetails(id: number) {
    return this.HttpClient.get(`${this.API_URL_DETAIL}?id=${id}`);
  }
}
