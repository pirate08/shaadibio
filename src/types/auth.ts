import { UserProps } from "./User";

export interface AuthState {
  user: UserProps | null;
  token: string | null;
  isAuthenticated: boolean;

  setAuth: (user: UserProps, token: string) => void;
  logout: () => void;
  updateUser: (data: Partial<UserProps>) => void;
}
