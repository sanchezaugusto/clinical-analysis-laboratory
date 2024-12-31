import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { config } from "dotenv";

config();

export const authorizeRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("authtoken");
    if (!token) return res.status(401).json("Access denied");

    try {
      const verified = verify(token, process.env.JWT_SECRET!) as { role: string };
      if (!verified) return res.status(401).json("Access denied");

      const userRole = verified.role;
      if (!roles.includes(userRole)) {
        return res.status(403).json("You do not have permissions to access this route");
      }

      next();
    } catch (error) {
      res.status(400).json("Invalid token");
    }
  };
};
