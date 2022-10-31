import "reflect-metadata";
import "express-async-errors";
import express from "express";
import usersRouter from "./routers/users.routes";
import sessionRouter from "./routers/session.routes";
import ErrorHandle from "./middleware/errorHandling.middleware";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", sessionRouter);

app.use(ErrorHandle);

export default app;
