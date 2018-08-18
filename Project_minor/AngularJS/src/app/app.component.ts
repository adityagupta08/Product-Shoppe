import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

  products = [];
  p: number = 1;

  public proID: number;
  public proName: string;
  public proDes: string;
  public proPrice: number;
  public pId: number;
  public pName: string;
  public pDes: string;
  public pPrice: number;
  public strObj: string;
  constructor(private _productservice: ProductService) {}

  ngOnInit() {
    this._productservice
      .getProducts()
      .subscribe(data => (this.products = data));
  }

  clearData() {
    this.pId = null;
    this.pPrice = null;
    this.pName = this.pDes = "";
  }

  addProduct() {
    this.strObj =
      '{"id":' +
      this.pId +
      ',"Name":"' +
      this.pName +
      '","Description":"' +
      this.pDes +
      '","Price":' +
      this.pPrice +
      "}";
    this._productservice
      .postProducts(JSON.parse(this.strObj))
      .subscribe(data => (this.products = data));
    this.clearData();
  }

  editData(id: number) {
    for (var p of this.products) {
      if (p.id == id) {
        this.proID = p.id;
        this.proName = p.Name;
        this.proDes = p.Description;
        this.proPrice = p.Price;
      }
    }
  }

  editProduct() {
    this.strObj =
      '{"id":' +
      this.proID +
      ',"Name":"' +
      this.proName +
      '","Description":"' +
      this.proDes +
      '","Price":' +
      this.proPrice +
      "}";
    this._productservice
      .updateProducts(JSON.parse(this.strObj), this.proID)
      .subscribe(data => (this.products = data));
  }

  removeProduct(id) {
    let confirmation = confirm("Are you sure you want to delete ?");
    if (confirmation) {
      this._productservice
        .deleteProducts(id)
        .subscribe(data => (this.products = data));
    }
  }
}
