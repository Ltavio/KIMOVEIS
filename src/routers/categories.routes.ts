import { Router } from "express";

import createCategoryController from "../controllers/createCategory.controller";
import ensureAuthMiddle from "../middleware/ensureAuth.middleware";
import ensureIsAdmAuthMiddle from "../middleware/ensureIsAdmAuth.middleware";

const categoriesRouter = Router();

categoriesRouter.post(
  "/",
  ensureAuthMiddle,
  ensureIsAdmAuthMiddle,
  createCategoryController
);

export default categoriesRouter;
