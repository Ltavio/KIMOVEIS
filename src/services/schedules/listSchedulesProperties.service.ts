import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { schedules_user_properties } from "../../entities/schedules_user_properties.entity";
import { AppError } from "../../errors/appErrors";

const listSchedulesProportiesService = async (id: string) => {
  const schedulesRepo = AppDataSource.getRepository(schedules_user_properties);
  const propertiesRepo = AppDataSource.getRepository(Properties);

  const listschedules = await schedulesRepo.find();

  const searchProporty = await propertiesRepo.findOneBy({
    id,
  });

  if (!searchProporty) {
    throw new AppError(404, "Proporty not found");
  }

  const filterlistschedules = listschedules.filter((element) => {
    element.property.id === id;
  });

  return listschedules;
};

export default listSchedulesProportiesService;
