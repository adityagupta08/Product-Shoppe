import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private _urlGet: string = "http://127.0.0.1:4010/rest/api/get";
  private _urlPost: string = "http://127.0.0.1:4010/rest/api/post";
  private _urlPut: string = "http://127.0.0.1:4010/rest/api/update/";
  private _urlDelete: string = "http://127.0.0.1:4010/rest/api/delete/";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._urlGet);
  }

  postProducts(data): Observable<Product[]> {
    return this.http.post<Product[]>(this._urlPost, data);
  }

  updateProducts(data, id): Observable<Product[]> {
    return this.http.put<Product[]>(this._urlPut + id, data);
  }

  deleteProducts(id): Observable<Product[]> {
    return this.http.delete<Product[]>(this._urlDelete + id);
  }
}
