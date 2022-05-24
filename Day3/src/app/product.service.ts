import {Injectable} from '@angular/core';
import {Product} from "./_model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor() {

  }
  showAllProducts() {
    return this.products;
  }
  add(productName: string, productCode: string, productPrice: string,  productImg:string , available:Date, rating:number) {
    let product = new Product();
    product.productId=this.products.length+1
    product.productName=productName;
    product.productCode=productCode;
    product.productImg=productImg
    product.available=available
    product.productPrice=Number(productPrice)
    product.productRate=rating
    this.products.push(product)
  }
  edit(productName: string, productCode: string, productPrice: string,  productImg:string , available:Date,rating:number, id:number){
    id=id-1;
    this.products[id].productName=productName;
    this.products[id].productCode=productCode;
    this.products[id].productPrice=Number(productPrice);
    this.products[id].productImg=productImg;
    this.products[id].available=available;
    this.products[id].productRate=rating;

  }
}
