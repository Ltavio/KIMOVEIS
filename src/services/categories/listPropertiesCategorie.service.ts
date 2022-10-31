import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appErrors";

const listPropertiesCategoriesService = async (id: string) => {
  const propertiesRepo = AppDataSource.getRepository(Properties);
  const categoryRepo = AppDataSource.getRepository(Categories);

  const listPropertie = await propertiesRepo.find();

  const searchCategory = await categoryRepo.findOneBy({
    id,
  });

  if (!searchCategory) {
    throw new AppError(404, "category not found");
  }

  const filterListPropertie = listPropertie.filter((element) => {
    element.category.id === id;
  });

  return { filterListPropertie: filterListPropertie, ...searchCategory };
};

export default listPropertiesCategoriesService;
