import { Component } from '@angular/core';

@Component({
  selector: 'app-food-blog',
  templateUrl: './food-blog.component.html',
  styleUrl: './food-blog.component.scss'
})
export class FoodBlogComponent {
  blogPosts = [
    { title: 'Delicious Pasta', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.' },
    { title: 'Exotic Desserts', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { title: 'Sizzling BBQ', content: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ' },
    { title: 'Healthy Smoothies', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ' },
    

  ];

}
