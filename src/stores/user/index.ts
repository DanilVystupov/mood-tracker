import { User } from "@supabase/supabase-js";
import { makeAutoObservable, runInAction } from "mobx";
import { supabase } from "../../client.ts";
class Store {
  user: User | null = {
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

  isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  async getUser() {
    this.setLoading(true)

    try {
      const { data: { user }, error } = await supabase.auth.getUser()

      if (error) {
        throw error
      }

      if (user) {
        this.setUser(user)
      }
    } catch (error) {
      console.error(error)
    } finally {
      this.setLoading(false)
    }
  }

  setUser(data: User) {
    runInAction(() => {
      this.user = { ...data }
    })
  }

  setLoading(value: boolean) {
    runInAction(() => {
      this.isLoading = value
    })
  }
}

export const userStore = new Store()