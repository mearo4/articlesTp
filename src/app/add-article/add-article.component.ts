// src/app/addarticle/addarticle.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddArticleComponent {
  @Output() articleAdded = new EventEmitter<Article>();

  title: string = '';
  photo: string = '';
  description: string = '';

  addArticle() {
    const newArticle = new Article(
      this.title,
      this.photo,
      new Date(),
      this.description
    );

    this.articleAdded.emit(newArticle);
    this.title = '';
    this.photo = '';
    this.description = '';
  }
}
