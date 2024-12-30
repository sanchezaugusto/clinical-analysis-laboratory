import { Request, Response } from 'express';
import { userService } from './service';

const {getUsers, getUserById, createUser, loginUser, deleteUser} = userService;


class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {
        console.log("controller");
        const users = await getUsers();
        return res.status(200).json(users);
      } catch (error) {
        return res.status(400).json({ error: (error as Error).message });
      }
  }
  async getUserById(req: Request, res: Response){
    const id = req.params.id;
    try{
        console.log("controller");
        const users = await getUserById(id);
        return res.status(200).json(users);
    }catch(error){
        return res.status(400).json({ error: (error as Error).message });
    }
  }
  async createUser(req: Request, res: Response){
    try{
        const userBody = req.body;
        
        const user = await createUser(userBody);
        res.status(201).json(user);
    }catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Server error', error: (error as Error).message });
    }
  }

  async loginUser(req: Request, res: Response){
      try{
          const userBody = req.body;
          const user = await loginUser(userBody);
          res.status(201).json(user);
      }catch (error) {
          console.error('Error creating user:', error);
          res.status(500).json({ message: 'Server error', error: (error as Error).message });
      }
  }

  async deleteUser(req: Request, res: Response){
    const id = req.params.id;
    try{
        const users = await deleteUser(id);
        return res.status(200).json(users);
    }catch(error){
        return res.status(400).json({ error: (error as Error).message });
    }
  }

}
export const userController = new UserController();