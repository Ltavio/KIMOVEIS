import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appErrors";

export default function ErrorHandle(
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
}
