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
  confirmPassword?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
