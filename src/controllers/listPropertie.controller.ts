import { Request, Response } from "express";
import listPropertiesService from "../services/properties/listPropertie.service";

const listPropertiesController = async (req: Request, res: Response) => {
  const listPropertie = await listPropertiesService();

  return res.status(200).json(listPropertie);
};

export default listPropertiesController;
