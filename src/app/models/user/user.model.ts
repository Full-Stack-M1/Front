export interface User {
  _id: number;
  username: string;
  email: string;
  password: string;
}

export type UserLogin = Omit<User, 'email' | '_id'>;

export type UserRegister = Omit<User, '_id'>;