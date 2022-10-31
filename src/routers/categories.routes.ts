import { Router } from "express";

import createCategoryController from "../controllers/createCategory.controller";
import listPropertiesCategorieController from "../controllers/listPropertiesCategories.controller";
import ensureAuthMiddle from "../middleware/ensureAuth.middleware";
import ensureIsAdmAuthMiddle from "../middleware/ensureIsAdmAuth.middleware";

const categoriesRouter = Router();

categoriesRouter.post(
  "/",
  ensureAuthMiddle,
  ensureIsAdmAuthMiddle,
  createCategoryController
);
categoriesRouter.get("/:id/properties", listPropertiesCategorieController);

export default categoriesRouter;
