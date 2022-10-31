import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import "dotenv/config";
import { AppError } from "../../errors/appErrors";

const sessionUserService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError(403, "Invalid user or password");
  }

  const verifyPassword = await compare(password, user.password);

  if (!verifyPassword) {
    throw new AppError(403, "Invalid user or password");
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
      isActive: user.isActive,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return token;
};

export default sessionUserService;
