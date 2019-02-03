import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:"posts", component:PostComponent},
  {path:"", redirectTo:"posts",pathMatch:"full"},
  {path:"customers", component:CustomerComponent},
  {path:"posts/:userid:", component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
