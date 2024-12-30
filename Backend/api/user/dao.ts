import User from "./model";
import { IUser } from "./types";

class UserDao {
  async getAllUsers() {
      try {
          const users = await User.find();
          return users;
        } catch (error) {
          throw Error((error as Error).message);
        } 
  }

  async getUserById(id : string){
      try{
          const users = await User.findById(id);
          return users;
      }catch(error){
          throw Error((error as Error).message);
      }
  }

  async createUser(userData : IUser){
      console.log("User input to save DAO: ", userData);
      try{
          const newUser = await User.create(userData);
          console.log("User created DAO: ", newUser);
          return newUser; 
      }catch(error){
          throw Error((error as Error).message);
      }   
  }

  async getUserByEmail(email: string) {
      try {
        const user = await User.findOne({ email });
        return user;
      } catch (error) {
        throw Error((error as Error).message);
      }
  }

  async deleteUser(id: string) {
    console.log("User input to delete DAO: ", id);
    try {
      const user = await User.findByIdAndDelete(id);
      return user;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

}

export const userDao = new UserDao();