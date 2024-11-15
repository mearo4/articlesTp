// src/app/article.model.ts
export class Article {
    constructor(
        public title: string,
        public photo: string,
        public date: Date,
        public description: string,
        public score: number = 0
    ) { }
}
