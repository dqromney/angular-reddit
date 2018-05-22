import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { until } from "selenium-webdriver";
import titleIs = until.titleIs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('InComm Inc.', 'This is the place where I\'ve worked since November 29th 2018.', 'http://incomm.com', 4),
      new Article('Angular 5', 'Great site for all that is Angular 5.', 'http://angular.io', 3),
      new Article('Fullstack', 'Great resource for Fullstack development.', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'Tried and true Angular homepage.', 'http://angular.io', 1)
    ];
  }

  // Add article
  addArticle(title: HTMLInputElement, description: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value}, description: ${description.value} and link: ${link.value}`);
    // Check for empty values
    if (title.value.trim() === '' || link.value.trim() === '') {
      return true;
    }
    // Otherwise push the new title and link to the array
    else  {
      this.articles.push(new Article(title.value, description.value, link.value, 0));
      title.value = '';
      description.value = '';
      link.value = '';
      return false;
    }
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
