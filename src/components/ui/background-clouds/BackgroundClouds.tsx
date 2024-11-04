import './BackgroundClouds.pcss';

export const BackgroundClouds = () => {
  const getRandomSize = () => Math.random() * 50 + 20 + 'px';

  return (
    <div className="clouds">
      <div
        className="cloud foreground"
        style={{
          animationDelay: '0s',
          top: '10%',
          height: `${getRandomSize()}`,
        }}
      ></div>
      <div
        className="cloud background"
        style={{
          animationDelay: '5s',
          top: '20%',
          height: `${getRandomSize()}`,
        }}
      ></div>
      <div
        className="cloud foreground"
        style={{
          animationDelay: '3s',
          top: '30%',
          height: `${getRandomSize()}`,
        }}
      ></div>
      <div
        className="cloud background"
        style={{
          animationDelay: '6s',
          top: '40%',
          height: `${getRandomSize()}`,
        }}
      ></div>
      <div
        className="cloud foreground"
        style={{
          animationDelay: '2s',
          top: '50%',
          height: `${getRandomSize()}`,
        }}
      ></div>
      <div
        className="cloud background"
        style={{
          animationDelay: '7s',
          top: '60%',
          height: `${getRandomSize()}`,
        }}
      ></div>
      <div
        className="cloud background"
        style={{
          animationDelay: '4s',
          top: '70%',
          height: `${getRandomSize()}`,
        }}
      ></div>
      <div
        className="cloud foreground"
        style={{
          animationDelay: '8s',
          top: '80%',
          height: `${getRandomSize()}`,
        }}
      ></div>
      <div
        className="cloud background"
        style={{
          animationDelay: '9s',
          top: '90%',
          height: `${getRandomSize()}`,
        }}
      ></div>
      <div
        className="cloud background"
        style={{
          animationDelay: '1s',
          top: '100%',
          height: `${getRandomSize()}`,
        }}
      ></div>
    </div>
  );
};
