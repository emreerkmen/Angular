import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CustomerComponent } from './customer/customer.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  {path:"posts", component:PostComponent},
  {path:"my-app", redirectTo:"posts",pathMatch:"full"},
  {path:"customers", component:CustomerComponent},
  {path:"posts/:userid", component:PostComponent},
  {path:"city", component:CityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
