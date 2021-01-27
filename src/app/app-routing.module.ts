import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  
  {path:'products',component:ProductComponent},
  {path:'product-add-1',component:ProductAddForm1Component},
  {path:'product-add-2',component:ProductComponent},
  {path:'products/category/:categoryId',component:ProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
