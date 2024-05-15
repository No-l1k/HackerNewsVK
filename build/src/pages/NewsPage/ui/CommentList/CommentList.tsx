import React from 'react';
import { IComment } from '../../model/types';

interface CommentTreeProps {
  comments: IComment[];
}

const CommentList: React.FC<CommentTreeProps> = ({ comments }) => {
  const renderComments = (comments: IComment[]) => {
    return comments.map(comment => (
      <div key={comment.id} style={{ marginLeft: comment.level * 20 }}>
        <p>{comment.text}</p>
        {comment.replies.length > 0 && renderComments(comment.replies)}
      </div>
    ));
  };

  return <div>{renderComments(comments)}</div>;
};

export default CommentList;