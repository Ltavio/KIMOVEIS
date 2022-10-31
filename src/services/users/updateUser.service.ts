import { IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { hash } from "bcrypt";
import { Request } from "express";
import { AppError } from "../../errors/appErrors";

const updateUserService = async (
  { name, email, password }: IUserUpdate,
  id: string,
  req: Request
): Promise<User | Array<string | number>> => {
  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError(404, "user not found");
  }

  if (!req.user.isAdm) {
    if (id === req.user.id) {
      await userRepo.update(id, {
        name: name ? name : findUser.name,
        email: email ? email : findUser.email,
        password: password ? await hash(password, 10) : findUser.password,
      });
      const user = await userRepo.findOneBy({
        id,
      });

      return user!;
    } else {
      throw new AppError(401, "User is not adm");
    }
  }
  await userRepo.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
  });

  const user = await userRepo.findOneBy({
    id,
  });

  return user!;
};

export default updateUserService;
