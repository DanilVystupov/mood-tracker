import { Routes, Route, Navigate } from 'react-router-dom';
import { HOME_PATH } from './utils/consts/paths.ts';
import { routes } from './routes/routes.tsx';

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      <Route path="*" element={<Navigate to={HOME_PATH} />} />
    </Routes>
  );
}

export default AppRoutes;
