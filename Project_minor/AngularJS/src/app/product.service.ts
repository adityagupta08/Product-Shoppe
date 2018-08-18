import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _urlGet:string = 'http://127.0.0.1:4010/rest/api/get';
  private _urlPost:string= 'http://127.0.0.1:4010/rest/api/post';
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this._urlGet);
  }

  postProducts(data):Observable<Product[]>{
    return this.http.post<Product[]>(this._urlPost, data);
  }

}
