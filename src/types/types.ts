export interface IFormPost {
  emoji: string;
  description: string;
  reason: string;
  datePublication: string;
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
