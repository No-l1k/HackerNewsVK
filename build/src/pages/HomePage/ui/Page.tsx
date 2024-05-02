import React, { useState, useEffect } from 'react';
import { RefreshButton } from '../../../shared';
import { useGetNewStoriesQuery, NewsArticle } from '../../../entities/news';

const Page: React.FC = () => {
  const [news, setNews] = useState<number[]>([]);
  const storiesSlice = news.slice(0, 100);
  const { data: newStories = [] } = useGetNewStoriesQuery({});

  useEffect(() => {
    if (newStories.length > 0) {
      setNews(newStories);
    }
  }, [newStories]);

  const handleRefresh = () => {
    setNews(newStories); 
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

export default Page;