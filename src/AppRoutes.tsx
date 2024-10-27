import { Navigate, Route, Routes } from 'react-router-dom';
import { HOME_PATH } from './helpers/constants/paths.ts';
import { privateRoutes } from './routes/routes.tsx';

function AppRoutes() {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      <Route path="*" element={<Navigate to={HOME_PATH} />} />
    </Routes>
  );
}

export default AppRoutes;
