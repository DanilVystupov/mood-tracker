import './PostList.pcss';
import { observer } from 'mobx-react-lite';
import { PostItem } from '../post-item/PostItem.tsx';
import { accountStore } from '../../../stores/account';

interface IPostList {
  showAllPosts?: boolean;
}

export const PostList = observer(({ showAllPosts = false }: IPostList) => {
  return (
    <ul className="post-list">
      {showAllPosts
        ? accountStore.posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))
        : accountStore.limitedPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
    </ul>
  );
});
