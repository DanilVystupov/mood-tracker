import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { supabase } from "../../../../client";
import { BASE_PATH } from "../../../../helpers/constants/paths";
import { useHandleNavigate } from "../../../../helpers/hooks/useHandleNavigate";
import { IFormSignUp } from "../../../../types/types";
import Button from "../../button/Button";
import './FormSignUp.pcss';

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<IFormSignUp>();

  const handleNavigate = useHandleNavigate();

  const sendForm: SubmitHandler<IFormSignUp> = async (formData) => {
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.name,
            }
          }
        }
      )

      if (error) {
        throw error
      }

      alert('Проверьте свой почтовый ящик для подтверждения регистрации!')
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    reset()
  }, [isSubmitSuccessful, reset])

  return (
    <section className="form-sign-up-wrapper">
      <form className="form-sign-up" onSubmit={handleSubmit(sendForm)}>
        <div className="form-sign-up__content">

          <div className="form-sign-up__fields">
            <div className="form-sign-up__field text-r18-140">
              <label htmlFor="name" className="form-sign-up__label">
                Имя:
              </label>
                
              <input
                className="form-sign-up__input"
                type="text" {...register('name', { required: true })}
                placeholder="Введите ваше имя"
                id="name"
                name="name"
              />
            </div>

            <div className="form-sign-up__field text-r18-140">
              <label htmlFor="email" className="form-sign-up__label">
                Электронная почта:
              </label>

              <input
                className="form-sign-up__input"
                type="email" {...register('email', { required: true })}
                placeholder="Введите email"
                id="email"
                name="email"
                autoComplete="username"
              />
            </div>

            <div className="form-sign-up__field text-r18-140">
              <label htmlFor="password" className="form-sign-up__label">
                Пароль:
              </label>

              <input
                className="form-sign-up__input"
                type="password" {...register('password', { required: true })}
                placeholder="Введите пароль"
                id="password"
                name="password"
                autoComplete="current-password"
              />
            </div>
          </div>


          <div className="form-sign-up__controls">
            <Button type="submit" secondary>
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </form>

      <div className="form-sign-up__note">
        <span>Уже есть аккаунт?</span>
        <Button primary onClick={() => handleNavigate(BASE_PATH)}>
          Войти
        </Button>
      </div>
    </section>
  );
}

export default FormSignUp;