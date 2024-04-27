import  { useState, useEffect } from 'react';
import { NewsArticle } from '../../../entities/news'; 

const Page = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {articles.map((article, index) => (
        <NewsArticle key={index} article={article} />
      ))}
    </div>
  );
};

export default Page;