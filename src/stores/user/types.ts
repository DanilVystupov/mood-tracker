import { User, Session, WeakPassword } from "@supabase/supabase-js";

export interface IToken {
  user: User,
  session: Session,
  weakPassword?: WeakPassword;
}