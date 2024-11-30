import { observer } from 'mobx-react-lite';
import { IEditFormPost, Post } from '../../../types/types';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/button/Button';
import { useEffect } from 'react';
import { accountStore } from '../../../stores/account';

interface IPostEditProps {
  post: Post;
}

const emojis: string[] = ['😊', '😢', '😡', '😎', '🤔'];

export const PostEdit = observer(({ post }: IPostEditProps) => {
  const { register, handleSubmit, setValue } = useForm<IEditFormPost>({
    defaultValues: {
      emoji: post.emoji,
      description: post.description,
      reason: post.reason,
    },
  });

  const handlePost = async (editPost: IEditFormPost) => {
    await accountStore.updatePost(editPost, post.id);
  };

  useEffect(() => {
    setValue('emoji', post.emoji);
    setValue('description', post.description);
    setValue('reason', post.reason);
  }, [post, setValue]);

  return (
    <div
      className="post-create-backdrop"
      onClick={() => accountStore.setIsEditPost(false)}
    >
      <div className="post-create" onClick={(e) => e.stopPropagation()}>
        <div className="post-create__header">
          <h2 className="post-create__title">Редактирование записи</h2>
          <Button onClick={() => accountStore.setIsEditPost(false)}>
            <span className="cross-icon"></span>
          </Button>
        </div>
        <form
          className="post-create__content"
          onSubmit={handleSubmit(handlePost)}
        >
          <div className="post__section">
            <h3 className="post-create-item__title">
              Выберите подходящий эмодзи:
            </h3>
            {emojis.map((emoji, index) => (
              <label key={index}>
                <input
                  type="radio"
                  {...register('emoji', { required: true })}
                  value={emoji}
                  defaultChecked={post.emoji === emoji}
                />
                {emoji}
              </label>
            ))}
          </div>
          <div className="post__section">
            <h3 className="post-create-item__title">Опишите ваше состояние</h3>
            <textarea
              spellCheck={true}
              lang="ru"
              rows={5}
              maxLength={255}
              {...register('description', { required: true })}
              placeholder="Введите текст..."
            ></textarea>
          </div>
          <div className="post__section">
            <h3 className="post-create-item__title">
              Опишите причину вашего состояния
            </h3>
            <textarea
              spellCheck={true}
              lang="ru"
              rows={5}
              maxLength={255}
              {...register('reason', { required: true })}
              placeholder="Введите текст..."
            ></textarea>
          </div>

          <div className="post__controls">
            <Button type="submit">Сохранить</Button>
          </div>
        </form>
      </div>
    </div>
  );
});
