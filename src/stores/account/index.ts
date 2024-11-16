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
  editedPostId: string | null = null;
  isOpenModal: boolean = false;
  isEdit: boolean = false;
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

  setEditedPostId(postId: string) {
    runInAction(() => {
      this.editedPostId = this.isEdit ? postId : null;
    });
  }

  setIsOpenModal(value: boolean) {
    runInAction(() => {
      this.isOpenModal = value;
    });
  }

  setIsEdit(isEdit: boolean) {
    runInAction(() => {
      this.isEdit = isEdit;
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

  async getUser() {
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

  async getPosts() {
    try {
      const { data: posts, error } = await supabase.from('posts').select();

      if (error) {
        throw error;
      }
      this.setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  }

  async getAllData() {
    this.setLoading(true);
    try {
      await Promise.all([this.getUser(), this.getPosts()]);
    } catch (error) {
      console.error(error);
    } finally {
      this.setLoading(false);
    }
  }

  async addPost(post: Post) {
    try {
      const { data: newPost, error } = await supabase
        .from('posts')
        .upsert({
          user_id: post.id,
          description: post.description,
          reason: post.reason,
          emoji: post.emoji,
        })
        .select();

      runInAction(() => {
        this.posts = [...this.posts, ...(newPost ?? [])];
      });

      if (error) {
        console.error('Ошибка при добавлении записи:', error.message);
      }
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

    this.getPosts();
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
        this.setIsEdit(false);
        this.getPosts();
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const accountStore = new Store();
