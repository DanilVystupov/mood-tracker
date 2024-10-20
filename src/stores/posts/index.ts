import { makeAutoObservable } from 'mobx';
import { IFormPost } from '../../types/types.ts';

class Store {
  posts: IFormPost[] = [];
  isOpenModal: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpenModal(isOpen: boolean) {
    this.isOpenModal = isOpen;
  }

  addPost = (data: IFormPost) => {
    const newPost = { ...data };

    this.posts.push(newPost);
  };
}

export const postsStore = new Store();
