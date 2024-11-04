import { observer } from "mobx-react-lite";
import { IEditFormPost, Post } from "../../../types/types";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button/Button";
import { postsStore } from "../../../stores/posts";
import { useEffect } from "react";

interface IPostEditProps {
  post: Post
}

const emojis: string[] = ['😊', '😢', '😡', '😎', '🤔'];

export const PostEdit = observer(({post}: IPostEditProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: {isSubmitSuccessful}
  } = useForm<IEditFormPost>({
    defaultValues: {
      emoji: post.emoji,
      description: post.description,
      reason: post.reason
    },
  });

  const handlePost = async (editPost: IEditFormPost) => {
    postsStore.updatePost(editPost, post.id)
  }

  useEffect(() => {
    setValue("emoji", post.emoji)
    setValue("description", post.description)
    setValue("reason", post.reason)
  }, [post, setValue])

  return (
    <form 
      className="post"
      onSubmit={handleSubmit(handlePost)}
    >
      <div className="post__section">
        <h4>
          Выбранный эмодзи:
          {emojis.map((emoji, index) => (
            <label key={index}>
              <input 
                type="radio"
                {...register("emoji", { required: true })}
                value={emoji}
                defaultChecked={post.emoji === emoji}
                />
              {emoji}
            </label>
          ))}
        </h4>
      </div>
      <div className="post__section">
        <h4>
          Описание состояния:
          <input
            type="text"
            {...register("description", { required: true })}
          />
        </h4>
      </div>
      <div className="post__section">
        <h4>
          Причина:
          <input
            type="text"
            {...register("reason", { required: true })}
          />
        </h4>
      </div>

      <div className="post__controls">
        <Button 
          primary
          type="submit"
        >
          Cохранить
        </Button>

        <Button
          secondary
          onClick={() => postsStore.setIsEdit(false)}
        >
          Отмена
        </Button>
      </div>
    </form>
  )
})