import { observer } from 'mobx-react-lite';
import { Post } from '../../../types/types.ts';
import './PostItem.pcss';
import { Button } from '../../ui/button/Button.tsx';
import { PostEdit } from '../post-edit/PostEdit.tsx';
import { useFormatDate } from '../../../helpers/hooks/useFormatDate.tsx';
import { accountStore } from '../../../stores/account/index.ts';

interface PostItemProps {
  post: Post;
}

export const PostItem = observer(({ post }: PostItemProps) => {
  const editPost = (isEdit: boolean, postId: string) => {
    accountStore.setIsEdit(isEdit)
    accountStore.setEditedPostId(postId)
  }

  const postDate = useFormatDate(post.inserted_at)

  if (accountStore.isEdit && accountStore.editedPostId === post.id) {
    return (
      <PostEdit post={post} />
    )
  }

  return (
    <div className="post">
      <div className="post__section">
        <h4>
          Время публикации: <span>{postDate}</span>
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
          onClick={() => accountStore.removePost(post.id)}
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
