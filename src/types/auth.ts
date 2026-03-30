import { UserProps } from "./user";

export interface AuthState {
  user: UserProps | null;
  token: string | null;
  isAuthenticated: boolean;

  setAuth: (user: UserProps, token: string) => void;
  logout: () => void;
  updateUser: (data: Partial<UserProps>) => void;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}
