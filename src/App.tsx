import AppRoutes from './AppRoutes.tsx';

import './assets/styles/breakpoints.pcss';
import './assets/styles/colors.pcss';
import './assets/styles/fonts.pcss';
import './assets/styles/global.pcss';
import './assets/styles/mixins.pcss';
import './assets/styles/reset.pcss';
import './assets/styles/typography.pcss';

// ------ Роли и роуты ------
// TODO: Добавить состояние isAuth для пользователей
// TODO: Добавить приватные и публичные роуты

// ------ Новый функционал  ------
// TODO: Добавить адаптивное навигационное меню
// TODO: Добавить кнопку с навигацией на новую страницу с графиком и диаграммой
// TODO: Добавить на странице всех постов филтьтрацию за выбранные даты в календаре

// ------ UI и другое ------
// TODO: Добавить состояние загрузки для кнопок / переходов (вроде как есть в хуке useForm)
// TODO: Добавить искуственную задержку в 7 секунд, для показа лоадера и текста "посмотрите, крутая анимация блин бла бла бла" на странице HOME
// TODO: Адаптировать приложение под разные устройства

function App() {
  return (
    <div className="container">
      <AppRoutes />
    </div>
  );
}

export default App;
