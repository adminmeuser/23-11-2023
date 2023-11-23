import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodBlogComponent } from './food-blog/food-blog.component';
import { AuthorComponent } from './author/author.component';
const routes: Routes = [

  { path:' ',
component:HomeComponent},

{ path:'food-blog',
component:FoodBlogComponent},

{ path:'author',
component:AuthorComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
