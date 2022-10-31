import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/users";
import updateUserService from "../services/users/updateUser.service";
import User from "../entities/user.entity";
import { AppError, handleError } from "../errors/appErrors";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const data: IUserUpdate = req.body;
    const id: string = req.params.id;
    if (
      req.body.id !== undefined ||
      req.body.isAdm !== undefined ||
      req.body.isActive !== undefined
    ) {
      throw new AppError(401, "Cannot edit id, isAdm and isActive");
    }
    const userUpdate = await updateUserService(data, id, req);
    if (userUpdate instanceof User) {
      return res.json(userUpdate);
    }
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default updateUserController;
