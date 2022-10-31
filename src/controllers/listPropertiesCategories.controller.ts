import { Request, Response } from "express";
import listPropertiesCategoriesService from "../services/properties/listPropertiesCategorie.service";

const listPropertiesCategorieController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const PropertiesCategorie = await listPropertiesCategoriesService(id);

  return res.status(200).json(PropertiesCategorie);
};

export default listPropertiesCategorieController;
