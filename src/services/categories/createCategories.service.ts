import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appErrors";
import { Categories } from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async ({
  name,
}: ICategoryRequest): Promise<Categories> => {
  const categoryRepo = AppDataSource.getRepository(Categories);

  const searchCategories = await categoryRepo.findOneBy({
    name,
  });

  if (searchCategories) {
    throw new AppError(400, "category already registered");
  }

  const category = categoryRepo.create({
    name: name,
  });

  await categoryRepo.save(category);

  return category;
};

export default createCategoryService;
