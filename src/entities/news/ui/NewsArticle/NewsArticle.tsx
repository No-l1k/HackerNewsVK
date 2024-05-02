import React from 'react';
import { useGetStoryByIdQuery } from '../../api/NewsApi';
import { formatDate } from '../../../../shared';

const NewsArticle: React.FC<{ storyId: number }> = ({ storyId }) => {
  const { data: article } = useGetStoryByIdQuery(storyId); 
  if (!article) return null;

  const formattedDate = formatDate(article.time);

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Оценки: {article.score}</p>
      <p>Автор: {article.by}</p>
      <p>Дата публикации: {formattedDate}</p>
    </div>
  );
};

export default NewsArticle;