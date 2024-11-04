import { FormLogin } from '../../../../components/ui/form/login/FormLogin.tsx';
import './Intro.pcss';

export const Intro = () => {
  return (
    <div className="intro">
      <h2 className="intro__title">Привет, дорогой пользователь</h2>

      <p className="intro__description text-r18-140">
        Эта платформа ориентирована на&nbsp;людей, которые хотят следить
        за&nbsp;своим психологическим здоровьем, анализировать свои эмоции
        и&nbsp;видеть их&nbsp;взаимосвязь с&nbsp;жизненными событиями.
      </p>

      <FormLogin />
    </div>
  );
}
