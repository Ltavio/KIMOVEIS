import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import createCategoryService from "../services/categories/createCategories.service";

const createCategoryController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const category = await createCategoryService(data);

    return res.status(201).json(category);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default createCategoryController;
