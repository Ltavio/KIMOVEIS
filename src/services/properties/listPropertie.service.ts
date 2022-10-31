import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

const listPropertiesService = async () => {
  const propertiesRepo = AppDataSource.getRepository(Properties);

  const searchProporty = await propertiesRepo.find();

  return searchProporty;
};

export default listPropertiesService;
