import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {AlertifyService} from '../services/alertify.service'
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[AlertifyService,ProductService]
})
export class ProductComponent implements OnInit {

  constructor (private alertifyService:AlertifyService,
              private productService:ProductService,
              private activatorRoute:ActivatedRoute) { 
    this.products=[];
  }
  title:string ="Urun Listesi";
  filterText="";
  products:Product[];


  ngOnInit(): void {
    this.activatorRoute.params.subscribe(params=>{
      this.productService.getProduct(params["categoryId"]).subscribe(data=>{
        this.products=data;
      })
    })
  
    }
  addToCart(product:Product){
    this.alertifyService.success(product.name +" added")
  }
}
