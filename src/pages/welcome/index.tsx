import Clouds from '../../components/ui/background-clouds/BackgroundClouds.tsx';
import Intro from './components/intro/Intro.tsx';
import './index.pcss';

function WelcomePage() {
  
  return (
    <div className="base-page">
      <div className="base-page__content">
        <Clouds />
        <Intro />
      </div>
    </div>
  );
}

export default WelcomePage;
