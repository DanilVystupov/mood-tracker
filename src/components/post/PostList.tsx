import { observer } from 'mobx-react-lite';
import { postsStore } from '../../stores/posts';
import { PostItem } from './PostItem.tsx';

export const PostList = observer(() => {
  return (
    <div className="post-list">
      {postsStore.posts.map((post) => (
        <PostItem key={post.datePublication} post={post} />
      ))}
    </div>
  );
});
