import { Component, OnInit } from '@angular/core';
import {Product} from "../../_model/product";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }


  strings:string[]=['iti-iti', 'get-attr' , 'helloworld']
  products:string[]=['macbook', 'dell' , 'hp', 'lenovo','samsung', 'asus']
  img: boolean = false;
  filteredProducts: Product[] = [];
  productsArray: Product[] = [];
  ngOnInit(): void {
   this.productsArray = this.productService.showAllProducts();

  }
  val:number=4;
  filter: string = "";


  addProduct(productName: string, productCode: string, productPrice: string,  productImg:string , available:Date, rating:number): void {
      this.productService.add(productName,productCode,productPrice,productImg,available,rating)
  }
  edit(productName: string, productCode: string, productPrice: string,  productImg:string , available:Date,rating:number, id:number): void {
    this.productService.edit(productName,productCode,productPrice,productImg,available,rating,id)
  }
  delete(index:number):void{
    this.productsArray.splice(index,1)
  }
  showImg(){
     return this.img = !this.img;
  }


}
