export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export type UserLogin = Omit<User, 'email' | 'id'>;

export type UserRegister = Omit<User, 'id'>;

export type userRef = Pick<User, 'id'>;