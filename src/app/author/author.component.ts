import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent {
  authorName = 'Surya Lakshmi P S';
  authorPlace = 'Newyork';
  authorHobbies = 'Exploring';

}
