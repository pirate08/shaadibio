import { UserProps } from "./User";

export interface AuthState {
  user: UserProps | null;
  token: string | null;
  isAuthenticated: boolean;
}
