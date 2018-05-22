import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { until } from "selenium-webdriver";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Array<Article>; // or Article[];

  constructor() {
    this.articles = [
      new Article('InComm Inc.', 'http://incomm.com', 'This is the place where I\'ve worked since November 29th 2017.', 4),
      new Article('Angular 5', 'http://angular.io', 'Great site for all that is Angular 5.', 3),
      new Article('Fullstack', 'http://fullstack.io', 'Great resource for Fullstack development.', 2),
      new Article('Angular Homepage', 'http://angular.io', 'Tried and true Angular homepage.', 1)
    ];
  }

  // Add article
  addArticle(title: HTMLInputElement, link: HTMLInputElement, description: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value}, description: ${description.value} and link: ${link.value}`);
    // Check for empty values
    if (title.value.trim() === '' || link.value.trim() === '') {
      // returning false, tells the browser not to propagate the event upwards.
      return false;
    }
    // Otherwise push the new title and link to the array
    else  {
      this.articles.push(new Article(title.value, link.value, description.value, 0));
      // Clear the form input values
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
