import { observer } from 'mobx-react-lite';
import { PostItem } from '../post-item/PostItem.tsx';
import './PostList.pcss'
import { accountStore } from '../../../stores/account/index.ts';

export const PostList = observer(() => {
  return (
    <div className="post-list">
      {accountStore.posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
});
