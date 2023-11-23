import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoodBlogComponent } from './food-blog/food-blog.component';
import { PostDirective } from './post.directive';
import { LikeDirective } from './like.directive';
import { PostComponent } from './post/post.component';
import { AuthorComponent } from './author/author.component';
import { StyleDirective } from './style.directive';
import { HoverDirective } from './hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodBlogComponent,
    PostDirective,
    LikeDirective,
    PostComponent,
    AuthorComponent,
    StyleDirective,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
