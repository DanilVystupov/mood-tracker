import AppRoutes from './AppRoutes.tsx';

import './assets/styles/typography.pcss';
import './assets/styles/colors.pcss';
import './assets/styles/fonts.pcss';
import './assets/styles/reset.pcss';
import './assets/styles/breakpoints.pcss';
import './assets/styles/mixins.pcss';
import './assets/styles/global.pcss';

function App() {
  return (
    <div className="container">
      <AppRoutes />
    </div>
  );
}

export default App;
