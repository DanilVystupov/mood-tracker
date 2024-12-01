import './AllPostsPage.pcss';
import { PostList } from '../../components/post/post-list/PostList.tsx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { accountStore } from '../../stores/account';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../helpers/constants/paths.ts';

export const AllPostsPage = observer(() => {
  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      accountStore.fetchPosts().catch((error) => console.error(error));
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="all-posts">
      <div className="all-posts__content">
        <div className="all-posts__header">
          <h1>Все ваши посты:</h1>

          <Link to={HOME_PATH} className="button button--secondary">
            Вернуться на главную
          </Link>
        </div>
        <PostList showAllPosts />
      </div>
    </div>
  );
});
