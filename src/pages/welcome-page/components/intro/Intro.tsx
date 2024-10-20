import { useNavigate } from 'react-router-dom';
import './Intro.pcss';
import Button from '../../../../components/ui/button/Button.tsx';

function Intro() {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/home');
  };

  return (
    <div className="intro">
      <h2 className="intro__title">Привет, дорогой пользователь</h2>

      <p className="intro__description text-r18-140">
        Эта платформа ориентирована на&nbsp;людей, которые хотят следить
        за&nbsp;своим психологическим здоровьем, анализировать свои эмоции
        и&nbsp;видеть их&nbsp;взаимосвязь с&nbsp;жизненными событиями.
      </p>

      <div className="intro__controls">
        <Button onClick={() => goToLoginPage()} primary>
          Войти
        </Button>

        <Button onClick={() => goToLoginPage()} secondary>
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
}

export default Intro;
