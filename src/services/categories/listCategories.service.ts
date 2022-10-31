import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";

const listCategoriesService = async () => {
  const categoriesRepo = AppDataSource.getRepository(Categories);

  const searchCategory = await categoriesRepo.find();

  return searchCategory;
};

export default listCategoriesService;
