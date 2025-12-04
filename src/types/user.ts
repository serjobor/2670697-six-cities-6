export type AuthData = {
  login: string;
  password: string;
}

export type UserData = {
  id: number;
  email: string;
  token: string;
}

export interface IUser {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}
