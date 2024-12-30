import {userDao} from './dao';
import { IUser } from "./types";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from 'dotenv';

config();

const { getAllUsers, getUserById , createUser, getUserByEmail, deleteUser} = userDao;

class UserService {
  async getUsers() {
    try {
        const users = await getAllUsers();
        return users;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }

  async getUserById(id: string){
    try{
        const users = await getUserById(id);
        return users;
    }catch(error){
        throw Error((error as Error).message);
    }

  }

  async createUser(userData: IUser){
    try{
        const user = userData;
        console.log('User input to save service:', user);

        return await createUser(user);
    }catch (error) {
      console.error('Error creating user:', error);
      throw Error((error as Error).message);
    }

  }
  async loginUser(user: {email:string, password:string}) {
    try{
        const { email, password } = user;
        const existingUser = await getUserByEmail(email);

        if (!existingUser) {
            throw new Error("Invalid email");
          }
          const isPasswordValid = await compare(password, existingUser.password!);
          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }
    
          const userPayload = {
            id: existingUser._id,
            name: existingUser.first_name,
            email: existingUser.email,
            role: existingUser.role
          };
          const token = sign(userPayload, process.env.JWT_SECRET!, {
            expiresIn: "1h",
          });
    
          return { userPayload, token };
    }catch (error) {
      console.error('Error creating user:', error);
      throw Error((error as Error).message);
    }

  }

  async deleteUser(id:string){
    try{
        const users = await deleteUser(id);
        return users;
    }catch(error){
        throw Error((error as Error).message);
    }
  }

}

export const userService = new UserService();