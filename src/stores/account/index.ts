import { User } from '@supabase/supabase-js';
import { makeAutoObservable, runInAction } from 'mobx';
import { supabase } from '../../client.ts';
import { IEditFormPost, Post } from '../../types/types.ts';

class Store {
  user: User | null = {
    id: '',
    aud: '',
    role: '',
    email: '',
    email_confirmed_at: '',
    phone: '',
    confirmation_sent_at: '',
    confirmed_at: '',
    last_sign_in_at: '',
    app_metadata: {
      provider: '',
      providers: [],
    },
    user_metadata: {
      email: '',
      email_verified: false,
      full_name: '',
      phone_verified: false,
      sub: '',
    },
    identities: [],
    created_at: '',
    updated_at: '',
    is_anonymous: false,
  };
  posts: Post[] = [];
  countLimitedPosts: number = 3;
  editedPostId: string | null = null;
  isOpenModal: boolean = false;
  isEditPost: boolean = false;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(data: User) {
    runInAction(() => {
      this.user = { ...data };
    });
  }

  setPosts(data: Post[]) {
    runInAction(() => {
      this.posts = [...data];
    });
  }

  setCountLimitedPosts(value: number) {
    runInAction(() => {
      this.countLimitedPosts = value;
    });
  }

  setEditedPostId(postId: string) {
    runInAction(() => {
      this.editedPostId = this.isEditPost ? postId : null;
    });
  }

  setIsOpenModal(value: boolean) {
    runInAction(() => {
      this.isOpenModal = value;
    });
  }

  setIsEditPost(isEditPost: boolean) {
    runInAction(() => {
      this.isEditPost = isEditPost;
    });
  }

  setLoading(value: boolean) {
    runInAction(() => {
      this.isLoading = value;
    });
  }

  closeModal() {
    this.isOpenModal = false;
  }

  get limitedPosts() {
    return this.posts.slice(0, this.countLimitedPosts);
  }

  async fetchUser() {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        throw error;
      }

      if (user) {
        this.setUser(user);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async fetchPosts() {
    try {
      const { data: posts, error } = await supabase
        .from('posts')
        .select()
        .order('inserted_at', { ascending: false });

      if (error) {
        throw error;
      }

      this.setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  }

  async fetchAllData() {
    this.setLoading(true);
    try {
      await Promise.all([this.fetchUser(), this.fetchPosts()]);
    } catch (error) {
      console.error(error);
    } finally {
      this.setLoading(false);
    }
  }

  async addPost(post: Post) {
    try {
      const { error } = await supabase
        .from('posts')
        .upsert({
          user_id: post.id,
          description: post.description,
          reason: post.reason,
          emoji: post.emoji,
        })
        .select();

      if (error) {
        throw Error;
      }

      await this.fetchPosts();
    } catch (error) {
      console.error(error);
    }
  }

  async removePost(id: string) {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    await this.fetchPosts();
  }

  async updatePost(editPost: IEditFormPost, postId: string) {
    try {
      const { data, error } = await supabase
        .from('posts')
        .update({
          emoji: editPost.emoji,
          description: editPost.description,
          reason: editPost.reason,
        })
        .eq('id', postId)
        .select();

      if (error) {
        throw error;
      }

      if (data) {
        this.setIsEditPost(false);
        await this.fetchPosts();
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const accountStore = new Store();
