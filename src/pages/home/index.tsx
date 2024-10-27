import { PostList } from '../../components/post/PostList.tsx';
import { postsStore } from '../../stores/posts';
import { userStore } from '../../stores/user/index.ts';
import { PostForm } from './components/post/PostForm.tsx';

const HomePage = () => {
  const userName = userStore.token.user.user_metadata.full_name

  return (
    <div className="home">
      <div className="home__content">
        <div className="home__header">
          <h1>Добро пожаловать, { userName }</h1>

          <p>
            Последняя запись: "тут будет дата последней записи в формате
            20.07.2024 22:22"
          </p>
        </div>

        {/* Круговая диаграмма за выбранный период */}
        {/*<GraphMode />*/}

        {/*<div>*/}
        {/*  тут будует блок последних 3х записей с короткими превью, ЕСЛИ НЕТ*/}
        {/*  записей, то "Тут появятся ваши записи"*/}
        {/*</div>*/}

        <button
          onClick={() => postsStore.setIsOpenModal(true)}
          className="button buttom--primary"
        >
          Создать запись
        </button>

        <PostForm />

        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
