import './HomePage.pcss';
import { useEffect } from 'react';
import { supabase } from '../../client.ts';
import { PostList } from '../../components/post/post-list/PostList.tsx';
import { Button } from '../../components/ui/button/Button.tsx';
import { ALL_POSTS_PATH, BASE_PATH } from '../../helpers/constants/paths.ts';
import { useHandleNavigate } from '../../helpers/hooks/useHandleNavigate.tsx';
import { accountStore } from '../../stores/account';
import { PostCreate } from './components/post-create/PostCreate.tsx';
import { observer } from 'mobx-react-lite';
import { Loader } from '../../components/ui/loader/Loader.tsx';
import { Link } from 'react-router-dom';

export const HomePage = observer(() => {
  const handleNavigate = useHandleNavigate();

  const loadMorePosts = async () => {
    accountStore.setLoading(true);
    accountStore.setCountLimitedPosts(accountStore.limitedPosts.length + 3);
    accountStore.setLoading(false);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    handleNavigate(BASE_PATH);
  };

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      accountStore.fetchAllData().catch((error) => console.error(error));
    }

    return () => {
      ignore = true;
    };
  }, []);

  return accountStore.isLoading ? (
    <>
      <Loader />
    </>
  ) : (
    <div className="home">
      <div className="home__content">
        <div className="home__header">
          <h1>
            Добро пожаловать, {accountStore.user?.user_metadata?.full_name}
          </h1>

          <Button secondary onClick={signOut}>
            Выйти
          </Button>
        </div>

        {/* Круговая диаграмма за выбранный период */}
        {/*<GraphMode />*/}

        <div className="home__top-controls">
          <Button onClick={() => accountStore.setIsOpenModal(true)}>
            Создать запись
          </Button>

          <Link to={ALL_POSTS_PATH} className="button button--primary">
            Все записи
          </Link>
        </div>

        {accountStore.isOpenModal && <PostCreate />}

        {!accountStore.posts.length ? (
          <div>
            ЕСЛИ НЕТ записей, то "Тут появятся ваши записи" + анимашка ждун
          </div>
        ) : (
          <div className="home__post-list">
            <PostList />

            {accountStore.limitedPosts.length < accountStore.posts.length && (
              <div className="home__bottom-controls">
                <Button primary onClick={() => loadMorePosts()}>
                  Загрузить еще
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
});
