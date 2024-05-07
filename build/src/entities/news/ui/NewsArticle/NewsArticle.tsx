import React from 'react';
import { useGetStoryByIdQuery } from '../../api/NewsApi';
import { formatDate } from '../../../../shared';
import { RouterLink, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';


const NewsArticle: React.FC<{ storyId: number }> = ({ storyId }) => {
  const routeNavigator = useRouteNavigator();

  const { data: article } = useGetStoryByIdQuery(storyId);
  if (!article) return null;

  const formattedDate = formatDate(article.time);


  return (
    <div>
      <RouterLink to={`/news/${storyId}`} onClick={() => routeNavigator.push(`/news/${storyId}`)}>
        <h2>{article.title}</h2>
      </RouterLink>
      <p>Оценки: {article.score}</p>
      <p>Автор: {article.by}</p>
      <p>Дата публикации: {formattedDate}</p>
    </div>
  );
};

export default NewsArticle;