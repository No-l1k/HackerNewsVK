import React, { useState, useEffect } from 'react';
import { RefreshButton } from '../../../shared';
import { useGetNewStoriesQuery, NewsArticle } from '../../../entities/news';

const HomePage: React.FC<{id:string}> = ({}) => {
  const [news, setNews] = useState<number[]>([]);
  const { data: newStoryIds = [], refetch } = useGetNewStoriesQuery({});
  const storiesSlice = news.slice(0, 100);

  useEffect(() => {
    if (newStoryIds.length > 0) {
      setNews(newStoryIds);
    }
  }, [newStoryIds]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 60000); 

    return () => clearInterval(intervalId); 
  }, [refetch]);

  const handleRefresh = async () => {
    try {
      await refetch(); 
    } catch (error) {
      console.error("Ошибка при обновлении статей:", error);
    }
  };

  return (
    <div>
      <h1>Последние новости</h1>
      <RefreshButton onRefresh={handleRefresh} />
      {storiesSlice.map((storyId: number, index: number) => (
        <NewsArticle key={index} storyId={storyId} />
      ))}
    </div>
  );
};

export default HomePage;