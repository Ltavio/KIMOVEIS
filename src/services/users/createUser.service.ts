import { IUserRequest } from "../../interfaces/users";
import User from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appErrors";

const createUserService = async ({
  email,
  name,
  isAdm,
  password,
}: IUserRequest): Promise<User> => {
  const userRepo = AppDataSource.getRepository(User);

  const searchUser = await userRepo.findOneBy({
    email,
  });

  if (searchUser) {
    throw new AppError(400, "Email already registered");
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepo.create({
    name,
    email,
    password: hashedPassword,
    isAdm,
  });

  await userRepo.save(user);

  return user;
};

export default createUserService;
