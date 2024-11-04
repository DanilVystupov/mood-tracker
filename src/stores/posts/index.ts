import { makeAutoObservable, runInAction } from 'mobx';
import { supabase } from '../../client.ts';
import { IEditFormPost, Post } from '../../types/types.ts';

class Store {
  posts: Post[] = [];
  editedPostId: string | null = null;
  isOpenModal: boolean = false;
  isLoading: boolean = false;
  isEdit: boolean = false;

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

  setIsEdit(isEdit: boolean) {
    runInAction(() => {
      this.isEdit = isEdit
    })
  }

  setEditedPostId(postId: string) {
    runInAction(() => {
      this.editedPostId = this.isEdit ? postId : null
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

  async removePost(id: string) {
    const { error } = await supabase
    .from("posts")
    .delete()
    .eq("id", id)
    .select()

    if (error) {
      throw error
    }

    this.getPosts()
  }

  async updatePost (editPost: IEditFormPost, postId: string) {
    try {
      const { data, error } = await supabase
        .from('posts')
        .update({
          emoji: editPost.emoji,
          description: editPost.description,
          reason: editPost.reason
        })
        .eq('id', postId)
        .select()

      if (error) {
        throw error
      }

      if (data) {
        this.setIsEdit(false)
        this.getPosts()
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const postsStore = new Store();
