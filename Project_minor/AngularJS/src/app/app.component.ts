import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  products = [];
  p: number = 1;

  proID: number;
  proName: string;
  proDes: string;
  proPrice: number;
  public pId: number;
  public pName: string;
  public pDes: string;
  public pPrice: number;
  public strObj: string;
  constructor(private _productservice: ProductService) {

  }

  ngOnInit() {
    this._productservice.getProducts()
      .subscribe(data => this.products = data);
  }


  AddProduct() {
    this.strObj = '{"id":' + this.pId + ',"Name":"' + this.pName + '","Description":"' + this.pDes + '","Price":' + this.pPrice + '}';
    this._productservice.postProducts(JSON.parse(this.strObj))
      .subscribe();
  }

}
