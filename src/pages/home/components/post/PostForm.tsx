import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postsStore } from '../../../../stores/posts';
import { userStore } from '../../../../stores/user/index.ts';
import { IFormPost } from '../../../../types/types.ts';

const emojis: string[] = ['😊', '😢', '😡', '😎', '🤔'];

export const PostForm = observer(() => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<IFormPost>();

  const createFormPost: SubmitHandler<IFormPost> = async (data) => {
    const id = userStore.user?.id
    
    if (!id) {
      console.error("Ошибка: ID пользователя не найден");
      return;
    }

    await postsStore.addPost({
      ...data, id,
      inserted_at: '',
      user_id: ''
    });
    postsStore.setIsOpenModal(false);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    postsStore.isOpenModal && (
      <div className="post-form flex">
        <h1 className="post-form__title">Создать запись</h1>
        <form
          className="post-form__content"
          onSubmit={handleSubmit(createFormPost)}
        >
          <div className="post-form__item post-form-item">
            <h2 className="post-form-item__title">
              Выберите подходящий эмодзи
            </h2>
            <div className="post-form-item__content">
              {emojis.map((emoji, index) => (
                <label key={index} className="post-form-item__label">
                  <input
                    type="radio"
                    {...register('emoji', { required: true })}
                    value={emoji}
                  />
                  {emoji}
                </label>
              ))}
            </div>
          </div>

          <div className="post-form__item post-form-item">
            <h2 className="post-form-item__title">
              Опишите ваше состояние
            </h2>
            <div className="post-form-item__content">
              <input
                type="text"
                {...register('description', { required: true })}
              />
            </div>
          </div>

          <div className="post-form__item post-form-item">
            <h2 className="post-form-item__title">
              Опишите причину вашего текущего состояния
            </h2>
            <div className="post-form-item__content">
              <input type="text" {...register('reason', { required: true })} />
            </div>
          </div>

          <button type="submit" className="post-form__btn">
            Создать
          </button>
        </form>
      </div>
    )
  );
});
