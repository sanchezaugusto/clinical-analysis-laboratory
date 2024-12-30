export type UserRole = "admin" | "comprador" | "vendedor";

export interface IUser {
    _id: string | undefined;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    role?: UserRole;
    image: string | undefined;
  }