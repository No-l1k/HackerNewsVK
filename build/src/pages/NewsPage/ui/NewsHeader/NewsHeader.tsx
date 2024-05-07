import React from 'react';
import { IArticle } from '../../../../entities/news';

interface NewsHeaderProps {
  article: IArticle;
}

const NewsHeader: React.FC<NewsHeaderProps> = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>Автор: {article.author}</p>
      <p>Дата публикации: {article.publishedDate}</p>
    </div>
  );
};

export default NewsHeader;