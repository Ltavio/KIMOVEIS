import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import { IScheduleRequest } from "../interfaces/schedules";
import createSchedulesService from "../services/schedules/createschedules.service";

const createSchedulesController = async (req: Request, res: Response) => {
  try {
    const { date, hour, propertyId } = req.body;
    const userId = req.user.id;

    const schedule = await createSchedulesService(
      date,
      hour,
      propertyId,
      userId
    );

    return res.status(200).json(schedule);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default createSchedulesController;
