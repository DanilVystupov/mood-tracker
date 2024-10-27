import AppRoutes from './AppRoutes.tsx';

import './assets/styles/breakpoints.pcss';
import './assets/styles/colors.pcss';
import './assets/styles/fonts.pcss';
import './assets/styles/global.pcss';
import './assets/styles/mixins.pcss';
import './assets/styles/reset.pcss';
import './assets/styles/typography.pcss';

// TODO: Добавить состояние isAuth для пользователей
// TODO: Добавить приватные и публичные роуты
// TODO: Добавить редирект с формы регистрации на форму логина и наоброт
// TODO: Реализовать в ui input component
// TODO: Добавить состояние загрузки для кнопок / переходов (вроде как есть в хуке useForm)
// TODO: Добавить в ui loader компонент для загрузки страниц

function App() {
  return (
    <div className="container">
      <AppRoutes />
    </div>
  );
}

export default App;
