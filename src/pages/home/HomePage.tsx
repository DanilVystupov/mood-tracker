import { useEffect } from 'react';
import { supabase } from '../../client.ts';
import { PostList } from '../../components/post/post-list/PostList.tsx';
import { Button } from '../../components/ui/button/Button.tsx';
import { BASE_PATH } from '../../helpers/constants/paths.ts';
import { useHandleNavigate } from '../../helpers/hooks/useHandleNavigate.tsx';
import { accountStore } from '../../stores/account';
import { PostCreate } from './components/post-create/PostCreate.tsx';
import { observer } from 'mobx-react-lite';
import { Loader } from '../../components/ui/loader/Loader.tsx';

export const HomePage = observer(() => {
  const handleNavigate = useHandleNavigate();

  const signOut = () => {
    supabase.auth.signOut();
    handleNavigate(BASE_PATH);
  };

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      accountStore.getAllData();
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
        </div>

        {/* Круговая диаграмма за выбранный период */}
        {/*<GraphMode />*/}

        {/*<div>*/}
        {/*  тут будует блок последних 3х записей и ссылка на просмотр всех записей*/}
        {/*  ЕСЛИ НЕТ записей, то "Тут появятся ваши записи" + анимашка ждун */}
        {/*</div>*/}

        <Button onClick={() => accountStore.setIsOpenModal(true)}>
          Создать запись
        </Button>

        {accountStore.isOpenModal && <PostCreate />}

        <PostList />

        <Button secondary onClick={signOut}>
          Выйти
        </Button>
      </div>
    </div>
  );
});
