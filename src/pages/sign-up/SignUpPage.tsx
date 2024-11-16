import { BackgroundClouds } from '../../components/ui/background-clouds/BackgroundClouds';
import FormSignUp from '../../components/ui/form/sign-up/FormSignUp';

export const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <div className="base-page__content">
        <BackgroundClouds />

        <div className="main-page__intro">
          <h2 className="main-page__intro__title">
            Привет, (тут могло быть ваше имя)
          </h2>

          <p className="main-page__description text-r18-140">
            Эта платформа ориентирована на&nbsp;людей, которые хотят следить
            за&nbsp;своим психологическим здоровьем, анализировать свои эмоции
            и&nbsp;видеть их&nbsp;взаимосвязь с&nbsp;жизненными событиями.
          </p>

          <FormSignUp />
        </div>
      </div>
    </div>
  );
};
