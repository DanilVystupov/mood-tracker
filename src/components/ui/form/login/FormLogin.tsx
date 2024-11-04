import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { supabase } from "../../../../client.ts";
import { HOME_PATH, SIGN_UP_PATH } from "../../../../helpers/constants/paths";
import { useHandleNavigate } from "../../../../helpers/hooks/useHandleNavigate";
import { IFormLogin } from "../../../../types/types";
import { Button } from "../../button/Button";
import './FormLogin.pcss';

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<IFormLogin>();

  const handleNavigate = useHandleNavigate();

  const sendForm: SubmitHandler<IFormLogin> = async (formData) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) {
        alert('Пожалуйста, введите корректные данные')
        console.error(error.message)
        return
      }

      alert('Вы успешно вошли в свой аккаунт!')
      handleNavigate(HOME_PATH)

    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    reset()
  }, [isSubmitSuccessful, reset])

  return (
    <section className="form-login-wrapper">
      <form className="form-login" onSubmit={handleSubmit(sendForm)}>
        <div className="form-login__content">

          <div className="form-login__fields">
            <div className="form-login__field text-r18-140">
              <label htmlFor="email" className="form-login__label">
                Электронная почта:
              </label>

              <input
                className="form-login__input"
                type="email" {...register('email', { required: true })}
                placeholder="Введите email"
                id="email"
                name="email"
                autoComplete="username"
              />
            </div>

            <div className="form-login__field text-r18-140">
              <label htmlFor="password" className="form-login__label">
                Пароль:
              </label>

              <input
                className="form-login__input"
                type="password" {...register('password', { required: true })}
                placeholder="Введите пароль"
                id="password"
                name="password"
                autoComplete="current-password"
              />
            </div>
          </div>


          <div className="form-login__controls">
            <Button type="submit" secondary>
              Войти
            </Button>
          </div>
        </div>
      </form>

      <div className="form-login__note">
        <span>Нет аккаунта?</span>
        <Button primary onClick={() => handleNavigate(SIGN_UP_PATH)}>
          Зарегистрироваться
        </Button>
      </div>
    </section>
  );
}
