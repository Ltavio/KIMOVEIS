import { Router } from "express";

import createPropertiesController from "../controllers/createProperties.controller";
import listPropertiesController from "../controllers/listPropertie.controller";
import listPropertiesCategorieController from "../controllers/listPropertiesCategories.controller";
import ensureAuthMiddle from "../middleware/ensureAuth.middleware";
import ensureIsAdmAuthMiddle from "../middleware/ensureIsAdmAuth.middleware";

const proportiesRouter = Router();

proportiesRouter.post(
  "/",
  ensureAuthMiddle,
  ensureIsAdmAuthMiddle,
  createPropertiesController
);
proportiesRouter.get("/:id/properties", listPropertiesCategorieController);
proportiesRouter.get("/", listPropertiesController);

export default proportiesRouter;
