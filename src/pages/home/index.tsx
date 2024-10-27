import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { supabase } from '../../client.ts';
import { PostList } from '../../components/post/PostList.tsx';
import Button from '../../components/ui/button/Button.tsx';
import { BASE_PATH } from '../../helpers/constants/paths.ts';
import { useHandleNavigate } from '../../helpers/hooks/useHandleNavigate.tsx';
import { postsStore } from '../../stores/posts';
import { userStore } from '../../stores/user/index.ts';
import { PostForm } from './components/post/PostForm.tsx';

const HomePage = () => {
  const handleNavigate = useHandleNavigate()

  const signOut = () => {
    supabase.auth.signOut()
    handleNavigate(BASE_PATH)
  }
  
  useEffect(() => {
    userStore.getUser()
  },[])

  return (
    userStore.isLoading ? 
    <div>UI loader...</div> :
    
    <div className="home">
      <div className="home__content">
        <div className="home__header">
          <h1>Добро пожаловать, { userStore.user?.user_metadata?.full_name }</h1>

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

        <Button secondary onClick={signOut}>
          Выйти
        </Button>
      </div>
    </div>
  );
};

export default observer(HomePage);
