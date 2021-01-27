import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-form1',
  templateUrl: './product-add-form1.component.html',
  styleUrls: ['./product-add-form1.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForm1Component implements OnInit {

  constructor(private categoryService:CategoryService,
              private productservice:ProductService,
              private alertifyService:AlertifyService) {
    this.categories=[];
   }
  model:Product=new Product();
  categories:Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>this.categories=data)
  }
   

  add(form:NgForm){
   this.productservice.addProduct(this.model).subscribe(data=>{
     this.alertifyService.success(data.name + "basari ile eklendi");
   });
   
  }

}
