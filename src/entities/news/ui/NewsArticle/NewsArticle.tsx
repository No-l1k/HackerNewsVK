import React from 'react';
import { IArticle } from '../..';

const NewsArticle: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>Rating: {article.rating}</p>
      <p>Author: {article.author}</p>
      <p>Published Date: {article.publishedDate}</p>
    </div>
  );
};

export default NewsArticle;