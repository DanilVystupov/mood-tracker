import { makeAutoObservable, runInAction } from 'mobx';
import { supabase } from '../../client.ts';
import { Post } from '../../types/types.ts';

class Store {
  posts: Post[] = [];
  isOpenModal: boolean = false;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpenModal(value: boolean) {
    runInAction(() => {
      this.isOpenModal = value;
    })
  }

  setLoading(value:boolean) {
    runInAction(() => {
      this.isLoading = value
    })
  }

  setPosts(data: Post[]) {
    runInAction(() => {
      this.posts = [...data]
    })
  }

  async getPosts() {
    this.setLoading(true)

    try {
      const { data: posts, error } = await supabase.from('posts').select()

      if (error) {
        throw error
      }
      this.setPosts(posts)
    } catch(error) {
      console.error(error)
    } finally {
      this.setLoading(false)
    }
  }

  async addPost(post: Post) {
    try {
      const { data: newPost, error } = await supabase
      .from('posts')
      .upsert(
        {
          user_id: post.id,
          description: post.description,
          reason: post.reason,
          emoji: post.emoji
        }
      )
      .select()
      
      runInAction(() => {
        this.posts = [...this.posts, ...(newPost ?? [])];
      });
      
      if (error) {
        console.error('Ошибка при добавлении записи:', error.message);
      }
    } catch(error) {
      console.error(error)
    }
  };
}

export const postsStore = new Store();
