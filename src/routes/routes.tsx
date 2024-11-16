import { RouteObject } from 'react-router-dom';
import {
  BASE_PATH,
  HOME_PATH,
  SIGN_UP_PATH,
} from '../helpers/constants/paths.ts';
import { HomePage, SignUpPage, MainPage } from '../pages';

export const privateRoutes: RouteObject[] = [
  { path: BASE_PATH, element: <MainPage /> },
  { path: HOME_PATH, element: <HomePage /> },
  { path: SIGN_UP_PATH, element: <SignUpPage /> },
];

export const publicRoutes: RouteObject[] = [
  { path: BASE_PATH, element: <MainPage /> },
  { path: SIGN_UP_PATH, element: <SignUpPage /> },
];
