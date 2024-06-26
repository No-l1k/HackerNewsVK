import React from 'react';
import { useParams } from '@vkontakte/vk-mini-apps-router';
import { useGetStoryByIdQuery } from '../../../entities/news';
import { formatDate } from '../../../shared';
import NewsHeader from './NewsHeader/NewsHeader';
import CommentCounter from './CommentCounter/CommentCounter';
import CommentList from './CommentList/CommentList';
import { IArticle } from '../../../entities/news';
import { Panel } from '@vkontakte/vkui';

const NewsPage: React.FC<{ id: string }> = ({ id }) => {
    const params = useParams();
    const storyId = params?.storyId;
    const { data: article } = useGetStoryByIdQuery(Number(storyId));
    if (!article) return null;

    const formattedDate = formatDate(article.publishedDate);

    const articleWithFormattedDate: IArticle & { formattedDate: string } = {
        ...article,
        formattedDate,
    };

    return (
        <Panel id={id}>
            <div>
                <a href={article.url}>Ссылка на новость</a>
                <NewsHeader article={articleWithFormattedDate} />
                <CommentCounter count={article.kids?.length || 0} />
                <CommentList comments={article.kids || []} />
            </div>
        </Panel>
    );
};

export default NewsPage;