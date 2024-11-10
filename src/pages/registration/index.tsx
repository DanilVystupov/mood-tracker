import { BackgroundClouds } from "../../components/ui/background-clouds/BackgroundClouds";
import FormSignUp from "../../components/ui/form/sign-up/FormSignUp";

export const RegistrationPage = () => {
  return (
    <div className="base-page">
      <div className="base-page__content">
        <BackgroundClouds />
        <div className="intro">
          <h2 className="intro__title">Привет, дорогой пользователь</h2>

          <p className="intro__description text-r18-140">
            Эта платформа ориентирована на&nbsp;людей, которые хотят следить
            за&nbsp;своим психологическим здоровьем, анализировать свои эмоции
            и&nbsp;видеть их&nbsp;взаимосвязь с&nbsp;жизненными событиями.
          </p>

          <FormSignUp />
        </div>
      </div>
    </div>
    
  );
}
