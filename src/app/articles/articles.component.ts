// src/app/articles/articles.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article } from '../model/article';
import { AddArticleComponent } from '../add-article/add-article.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule, AddArticleComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles: Article[] = [
    new Article(
      'First Article',
      'https://via.placeholder.com/150',
      new Date(),
      'This is the first article description',
      0
    ),

  ];

  searchQuery: string = '';
  showAddArticleForm: boolean = false;

  addArticle(newArticle: Article) {
    this.articles.push(newArticle);
    this.sortArticles();
  }

  upvote(article: Article) {
    article.score++;
    this.sortArticles();
  }

  downvote(article: Article) {
    if (article.score > 0) {
      article.score--;
      this.sortArticles();
    }
  }

  sortArticles() {
    this.articles.sort((a, b) => b.score - a.score);
  }

  get filteredArticles() {
    return this.articles.filter(article =>
      article.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
