import { observer } from 'mobx-react-lite';
import { Post } from '../../types/types.ts';

interface PostItemProps {
  post: Post;
}

export const PostItem = observer(({ post }: PostItemProps) => {
  return (
    <div className="post-item">
      <h2>
        Время публикации: {post.inserted_at}
        <hr />
        Выбранный эмодзи: {post.emoji}
        <hr />
        Описание состояния: {post.description}
        <hr />
        Причина: {post.reason}
      </h2>
    </div>
  );
});
