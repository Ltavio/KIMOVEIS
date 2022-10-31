import { Request, Response } from "express";

const listPropertiesCategorieController = async (
  req: Request,
  res: Response
) => {
  const PropertiesCategorie = await listPropertiesService();

  return res.status(200).json(PropertiesCategorie);
};

export default listPropertiesCategorieController;
