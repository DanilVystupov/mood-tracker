import { makeAutoObservable } from "mobx";
import { IToken } from './types';

class Store {
  token: IToken = {
    user: {
      id: "",
      aud: "",
      role: "",
      email: "",
      email_confirmed_at: "",
      phone: "",
      confirmation_sent_at: "",
      confirmed_at: "",
      last_sign_in_at: "",
      app_metadata: {
        provider: "",
        providers: []
      },
      user_metadata: {
        email: "",
        email_verified: false,
        full_name: "",
        phone_verified: false,
        sub: ""
      },
      identities: [],
      created_at: "",
      updated_at: "",
      is_anonymous: false
    },
    session: {
      access_token: "",
      token_type: "",
      expires_in: 0,
      expires_at: 0,
      refresh_token: "",
      user: {
        id: "",
        aud: "",
        role: "",
        email: "",
        email_confirmed_at: "",
        phone: "",
        confirmation_sent_at: "",
        confirmed_at: "",
        last_sign_in_at: "",
        app_metadata: {
          provider: "",
          providers: []
        },
        user_metadata: {
          email: "",
          email_verified: false,
          full_name: "",
          phone_verified: false,
          sub: ""
        },
        identities: [],
        created_at: "",
        updated_at: "",
        is_anonymous: false
      }
    }
  };

  constructor() {
    makeAutoObservable(this)
    this.loadToken()
  }

  setToken(tokenResponce: IToken) {
    this.token = { ...tokenResponce }
  }

  loadToken() {
    const tokenStr = localStorage.getItem('sb-kkbvhvrybnnedhvtrggq-auth-token')
    if (tokenStr) {
      this.token = JSON.parse(localStorage.getItem('sb-kkbvhvrybnnedhvtrggq-auth-token'))
      console.log('this token => ', this.token)
    }
  }
}

export const userStore = new Store()