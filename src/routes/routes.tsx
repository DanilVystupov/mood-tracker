import { RouteObject } from 'react-router-dom';
import { BASE_PATH, HOME_PATH } from '../utils/consts/paths.ts';
import HomePage from '../pages/home-page';
import BasePage from '../pages/welcome-page';

export const routes: RouteObject[] = [
  { path: BASE_PATH, element: <BasePage /> },
  { path: HOME_PATH, element: <HomePage /> },
];
