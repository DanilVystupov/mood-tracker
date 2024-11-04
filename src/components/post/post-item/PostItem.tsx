import { observer } from 'mobx-react-lite';
import { Post } from '../../../types/types.ts';
import './PostItem.pcss';
import { Button } from '../../ui/button/Button.tsx';
import { postsStore } from '../../../stores/posts/index.ts';
import { PostEdit } from '../post-edit/PostEdit.tsx';

interface PostItemProps {
  post: Post;
}

export const PostItem = observer(({ post }: PostItemProps) => {
  const editPost = (isEdit: boolean, postId: string) => {
    postsStore.setIsEdit(isEdit)
    postsStore.setEditedPostId(postId)
  }

  if (postsStore.isEdit && postsStore.editedPostId === post.id) {
    return (
      <PostEdit post={post} />
    )
  }

  return (
    <div className="post">
      <div className="post__section">
        <h4>
          Время публикации: <span>{post.inserted_at}</span>
        </h4>
      </div>
      <div className="post__section">
        <h4>
          Выбранный эмодзи: <span>{post.emoji}</span>
        </h4>
      </div>
      <div className="post__section">
        <h4>
          Описание состояния: <span>{post.description}</span>
        </h4>
      </div>
      <div className="post__section">
        <h4>
          Причина: <span>{post.reason}</span>
        </h4>
      </div>

      <div className="post__controls">
        <Button 
          primary
          onClick={() => postsStore.removePost(post.id)}
        >
          Удалить
        </Button>

        <Button 
          secondary
          onClick={() => editPost(true, post.id)}
        >
          Редактировать
        </Button>
      </div>
    </div>
  );
});
