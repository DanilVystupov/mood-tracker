import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import ErrorPage from './pages/ErrorPage.tsx';
import { HOME_PATH, ABOUT_PATH } from './consts/paths.ts';

function App() {
  return (
    <Routes>
      <Route path={`${HOME_PATH}`} element={<HomePage />} />
      <Route path={`${ABOUT_PATH}`} element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
