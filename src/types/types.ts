export interface IFormPost {
  emoji: string;
  description: string;
  reason: string;
  datePublication: string;
}

export interface IEditFormPost {
  id: string;
  emoji: string;
  description: string;
  reason: string;
}

export interface IFormSignUp {
  name: string;
  email: string;
  password: string;
}

export interface IFormLogin {
  email: string;
  password: string;
}

export type Post = {
  id: string;
  emoji: string;
  description: string;
  reason: string;
  inserted_at: string;
  user_id: string
}
