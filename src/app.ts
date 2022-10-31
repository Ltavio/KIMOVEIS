import "reflect-metadata";
import "express-async-errors";
import express from "express";
import usersRouter from "./routers/users.routes";
import sessionRouter from "./routers/session.routes";
import ErrorHandle from "./middleware/errorHandling.middleware";
import proportiesRouter from "./routers/proporties.routes";
import categoriesRouter from "./routers/categories.routes";
import schedulesRouter from "./routers/schedules.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", sessionRouter);
app.use("/properties", proportiesRouter);
app.use("/categories", categoriesRouter);
app.use("/schedules", schedulesRouter);

app.use(ErrorHandle);

export default app;
