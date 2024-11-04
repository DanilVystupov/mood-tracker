import { BackgroundClouds } from '../../components/ui/background-clouds/BackgroundClouds.tsx';
import { Intro } from './components/intro/Intro.tsx';
import './index.pcss';

export const WelcomePage = () => {
  return (
    <div className="base-page">
      <div className="base-page__content">
        <BackgroundClouds />
        <Intro />
      </div>
    </div>
  );
}
