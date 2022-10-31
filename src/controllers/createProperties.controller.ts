import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import { IAddressRequest } from "../interfaces/properties";
import createPropertiesService from "../services/properties/createProperties.service";

const createPropertiesController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const newProperties = await createPropertiesService(data);

    return res.status(201).json(newProperties);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default createPropertiesController;
