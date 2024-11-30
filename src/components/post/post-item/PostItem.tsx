import { observer } from 'mobx-react-lite';
import { Post } from '../../../types/types.ts';
import './PostItem.pcss';
import { Button } from '../../ui/button/Button.tsx';
import { PostEdit } from '../post-edit/PostEdit.tsx';
import { useFormatDate } from '../../../helpers/hooks/useFormatDate.tsx';
import { accountStore } from '../../../stores/account';

interface PostItemProps {
  post: Post;
}

export const PostItem = observer(({ post }: PostItemProps) => {
  const editPost = (isEditPost: boolean, postId: string) => {
    accountStore.setIsEditPost(isEditPost);
    accountStore.setEditedPostId(postId);
  };
  const postDate = useFormatDate(post.inserted_at);
  const body = window.document.body;

  if (accountStore.isEditPost) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }

  return (
    <>
      {accountStore.isEditPost && accountStore.editedPostId === post.id && (
        <PostEdit post={post} />
      )}

      <li className="post">
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
            Причина: <span className="text-r16">{post.reason}</span>
          </h4>
        </div>

        <div className="post__controls">
          <Button primary onClick={() => accountStore.removePost(post.id)}>
            Удалить
          </Button>

          <Button secondary onClick={() => editPost(true, post.id)}>
            Редактировать
          </Button>
        </div>
      </li>
    </>
  );
});
