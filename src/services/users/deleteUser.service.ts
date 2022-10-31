import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";

const deleteUserService = async (
  id: string
): Promise<User | Array<string | number>> => {
  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError(404, "User not found");
  }

  if (!findUser.isActive) {
    throw new AppError(400, "User not active");
  }

  await userRepo.update(id, {
    isActive: false,
  });

  const user = await userRepo.findOneBy({
    id,
  });

  return user!;
};

export default deleteUserService;
