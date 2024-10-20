import { IFormPost } from '../../types/types.ts';
import { observer } from 'mobx-react-lite';

interface PostItemProps {
  post: IFormPost;
}

export const PostItem = observer(({ post }: PostItemProps) => {
  return (
    <>
      <div className="post-item">
        <h2>
          Время публикации: {post.datePublication}
          <hr />
          Выбранный эмодзи: {post.emoji}
          <hr />
          Описание состояния: {post.description}
          <hr />
          Причина: {post.reason}
        </h2>
      </div>
    </>
  );
});
