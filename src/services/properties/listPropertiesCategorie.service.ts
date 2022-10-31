import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

const listPropertiesCategoriesService = async (id: string) => {
  const propertiesRepo = AppDataSource.getRepository(Properties);

  const listPropertie = await propertiesRepo.find();

  const filterListPropertie = listPropertie.filter((element) => {
    element.category.id === id;
  });

  return filterListPropertie;
};

export default listPropertiesCategoriesService;
