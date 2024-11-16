import './index.pcss';
import { BackgroundClouds } from '../components/ui/background-clouds/BackgroundClouds.tsx';
import { FormLogin } from '../components/ui/form/login/FormLogin.tsx';

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="base-page__content">
        <BackgroundClouds />

        <div className="main-page__intro">
          <h2 className="main-page__title">
            Привет, (тут могло быть ваше имя)
          </h2>

          <p className="main-page__description text-r18-140">
            Эта платформа ориентирована на&nbsp;людей, которые хотят следить
            за&nbsp;своим психологическим здоровьем, анализировать свои эмоции
            и&nbsp;видеть их&nbsp;взаимосвязь с&nbsp;жизненными событиями.
          </p>

          <FormLogin />
        </div>
      </div>
    </div>
  );
};
