import { RouteObject } from 'react-router-dom';
import {
  BASE_PATH,
  HOME_PATH,
  SIGN_UP_PATH,
} from '../helpers/constants/paths.ts';
import { HomePage, RegistrationPage, WelcomePage } from '../pages';

export const privateRoutes: RouteObject[] = [
  { path: BASE_PATH, element: <WelcomePage /> },
  { path: HOME_PATH, element: <HomePage /> },
  { path: SIGN_UP_PATH, element: <RegistrationPage /> },
];

export const publicRoutes: RouteObject[] = [
  { path: BASE_PATH, element: <WelcomePage /> },
  { path: SIGN_UP_PATH, element: <RegistrationPage /> },
];
