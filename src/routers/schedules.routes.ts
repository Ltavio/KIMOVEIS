import { Router } from "express";

import createSchedulesController from "../controllers/createSchedule.controller";
import listSchedulesProportiesController from "../controllers/listSchedulesPorportie.controller";
import ensureAuthMiddle from "../middleware/ensureAuth.middleware";
import ensureIsAdmAuthMiddle from "../middleware/ensureIsAdmAuth.middleware";

const schedulesRouter = Router();

schedulesRouter.post("/", ensureAuthMiddle, createSchedulesController);
schedulesRouter.get(
  "/properties/:id",
  ensureAuthMiddle,
  ensureIsAdmAuthMiddle,
  listSchedulesProportiesController
);
export default schedulesRouter;
