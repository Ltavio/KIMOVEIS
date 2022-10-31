import { Request, Response } from "express";
import listSchedulesProportiesService from "../services/schedules/listSchedulesProperties.service";

const listSchedulesProportiesController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const schedulesProporty = await listSchedulesProportiesService(id);

  return res.status(200).json(schedulesProporty);
};

export default listSchedulesProportiesController;
