import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { PostItem } from '../post-item/PostItem.tsx';
import { postsStore } from '../../../stores/posts/index.ts';
import './PostList.pcss'

export const PostList = observer(() => {

  useEffect(() => {
    let ignore = false

    if (!ignore) {
      postsStore.getPosts()
    }

    return () => {
      ignore = true
    }
  },[])

  return (
    postsStore.isLoading ? 

    <div>UI LOADER...</div> :

    <div className="post-list">
      {postsStore.posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
});