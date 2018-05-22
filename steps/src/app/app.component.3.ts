import { Component } from '@angular/core';
import { Article } from './article/article.model'; // <-- import this

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]; // <-- component property

  constructor() {
    this.articles = [
      new Article('Angular 5', 'Some description on Angular 5', 'http://angular.io', 3),
      new Article('Fullstack', 'Some description on Fullstack','http://fullstack.io', 2),
      new Article('Angular Homepage', 'Some description on Angular Homepage', 'http://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, description: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, description.value, link.value, 0));
    title.value = '';
    description.value = '';
    link.value = '';
    return false;
  }
}
