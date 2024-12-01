import './PostCreate.pcss';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { accountStore } from '../../../../stores/account';
import { IFormPost } from '../../../../types/types.ts';
import { Button } from '../../../../components/ui/button/Button.tsx';
import { Textarea } from '../../../../components/ui/textarea/Textarea.tsx';
import { Input } from '../../../../components/ui/input/Input.tsx';

const emojis: string[] = ['😊', '😢', '😡', '😎', '🤔'];

export const PostCreate = observer(() => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<IFormPost>();

  const createFormPost: SubmitHandler<IFormPost> = async (data) => {
    const id = accountStore.user?.id;

    if (!id) {
      console.error('Ошибка: ID пользователя не найден');
      return;
    }

    await accountStore.addPost({
      ...data,
      id,
      inserted_at: '',
      user_id: '',
    });
    accountStore.setIsOpenModal(false);
  };

  useEffect(() => {
    let ignore = false;
    const body = window.document.body;

    if (!ignore) {
      body.style.overflow = 'hidden';
    }

    if (isSubmitSuccessful) {
      reset();
    }

    return () => {
      ignore = true;
      body.style.overflow = 'visible';
    };
  }, [isSubmitSuccessful, reset]);

  return (
    <div
      className="post-create-backdrop"
      onClick={() => accountStore.closeModal()}
    >
      <div className="post-create" onClick={(e) => e.stopPropagation()}>
        <div className="post-create__header">
          <h2 className="post-create__title">Создание записи</h2>
          <Button onClick={() => accountStore.closeModal()}>
            <span className="cross-icon"></span>
          </Button>
        </div>
        <form
          className="post-create__content"
          onSubmit={handleSubmit(createFormPost)}
        >
          <div className="post__section">
            <h3 className="post-create-item__title">
              Выберите подходящий эмодзи
            </h3>
            {emojis.map((emoji, index) => (
              <label key={index} className="post-create-item__label">
                <Input
                  type="radio"
                  register={register('emoji', { required: true })}
                  value={emoji}
                />
                {emoji}
              </label>
            ))}
          </div>

          <div className="post__section">
            <h3 className="post-create-item__title">Опишите ваше состояние</h3>

            <Textarea register={register('description', { required: true })} />
          </div>

          <div className="post__section">
            <h3 className="post-create-item__title">
              Опишите причину вашего состояния
            </h3>

            <Textarea register={register('reason', { required: true })} />
          </div>

          <Button type="submit">Создать</Button>
        </form>
      </div>
    </div>
  );
});
