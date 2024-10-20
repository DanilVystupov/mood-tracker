import './index.pcss';
import Intro from './components/intro/Intro.tsx';
import Clouds from './components/clouds/Clouds.tsx';

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
