import { Request, Response } from "express";
import User from "../entities/user.entity";
import { AppError, handleError } from "../errors/appErrors";
import deleteUserService from "../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const user = await deleteUserService(id);

    return res.status(204).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default deleteUserController;
