import { IArticle } from './model/types';
export type {IArticle}

import NewsArticle from './ui/NewsArticle/NewsArticle';
export {NewsArticle}

export * from './api/NewsApi';
export { useGetNewStoriesQuery, useGetStoryByIdQuery } from './api/NewsApi';
