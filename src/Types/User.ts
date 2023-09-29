export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  active: boolean;
  admin?: boolean;
  superAdmin?: boolean;
}

export interface IUserLite {
  id: number;
  email: string;
  admin?: boolean;
  superAdmin?: boolean;
}
