import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users";
import createUserService from "../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";
import { AppError, handleError } from "../errors/appErrors";

const createUserController = async (req: Request, res: Response) => {
  try {
    const data: IUserRequest = req.body;
    const users = await createUserService(data);

    return res.status(201).json(instanceToPlain(users));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default createUserController;
