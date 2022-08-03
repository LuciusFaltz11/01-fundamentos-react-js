import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };
  return (
    <div className={styles.comment}>
      <div className={styles.comentAvatarPhoto}>
        <Avatar
          hasBorder={false}
          src="https://avatars.githubusercontent.com/u/91973902?s=400&u=9df236baded2e4bf524d3cd3cb7e7633e74c9eca&v=4"
          alt="Comentarista"
        />
      </div>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <div className={styles.commentText}>
            <strong>Lucius Faltz</strong>
            <span> (você)</span>
            <time>Cerca de 1h</time>
            <p>{content}</p>
          </div>
          <button onClick={handleDeleteComment} className={styles.trash}>
            <Trash size={24} />
          </button>
        </div>
        <div className={styles.avaliate}>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            <p>
              Aplaudir
              <span>{likeCount}</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
