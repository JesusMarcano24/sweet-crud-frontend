import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/maintenance-Api';

  constructor(private http: HttpClient) {}

  login(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, payload);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allProducts`);
  }

  getProductDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/details?id=${id}`);
  }
}
