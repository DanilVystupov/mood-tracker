import './PostList.pcss';
import { observer } from 'mobx-react-lite';
import { PostItem } from '../post-item/PostItem.tsx';
import { accountStore } from '../../../stores/account';

export const PostList = observer(() => {
  const limitedPosts = accountStore.limitedPosts;

  return (
    <ul className="post-list">
      {limitedPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
});
