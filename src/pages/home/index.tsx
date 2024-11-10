import { useEffect } from 'react';
import { supabase } from '../../client.ts';
import { PostList } from '../../components/post/post-list/PostList.tsx';
import { Button } from '../../components/ui/button/Button.tsx';
import { BASE_PATH } from '../../helpers/constants/paths.ts';
import { useHandleNavigate } from '../../helpers/hooks/useHandleNavigate.tsx';
import { accountStore } from '../../stores/account/index.ts';
import { PostForm } from './components/post/PostForm.tsx';
import { observer } from 'mobx-react-lite';
import { Loader } from '../../components/ui/loader/Loader.tsx';

export const HomePage = observer(() => {
  const handleNavigate = useHandleNavigate()

  const signOut = () => {
    supabase.auth.signOut()
    handleNavigate(BASE_PATH)
  }
  
  useEffect(() => {
    let ignore = false

    if (!ignore) {
      accountStore.getAllData()
    }

    return () => {
      ignore = true
    }
  },[])

  return (
    accountStore.isLoading ? (
    <>
      <Loader/>
    </> 
    ) : (
    <div className="home">
      <div className="home__content">
        <div className="home__header">
          <h1>Добро пожаловать, { accountStore.user?.user_metadata?.full_name }</h1>
        </div>

        {/* Круговая диаграмма за выбранный период */}
        {/*<GraphMode />*/}

        {/*<div>*/}
        {/*  тут будует блок последних 3х записей, ЕСЛИ НЕТ*/}
        {/*  записей, то "Тут появятся ваши записи"*/}
        {/*</div>*/}

        <button
          onClick={() => accountStore.setIsOpenModal(true)}
          className="button buttom--primary"
        >
          Создать запись
        </button>

        <PostForm />

        <PostList />

        <Button secondary onClick={signOut}>
          Выйти
        </Button>
      </div>
    </div>
  ));
});
