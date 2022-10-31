import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appErrors";
import { Properties } from "../../entities/properties.entity";
import { schedules_user_properties } from "../../entities/schedules_user_properties.entity";
import { IScheduleRequest } from "../../interfaces/schedules";
import User from "../../entities/user.entity";

const createSchedulesService = async (
  date: string,
  hour: string,
  propertyId: string,
  userId: string
): Promise<schedules_user_properties> => {
  const schedulesRepo = AppDataSource.getRepository(schedules_user_properties);
  const propertieRepo = AppDataSource.getRepository(Properties);
  const userRepo = AppDataSource.getRepository(User);

  const searchPropertie = await propertieRepo.findOneBy({
    id: propertyId,
  });

  const searchUser = await userRepo.findOneBy({
    id: userId,
  });

  const searchSchedule = await schedulesRepo.findOne({
    where: {
      property: {
        id: propertyId,
      },
    },
  });

  const searchScheduleData = new Date(date).getDay();

  const searchScheduleHour = parseFloat(hour);

  if (searchScheduleData < 1 || searchScheduleData > 5) {
    throw new AppError(400, "Date invalid");
  }

  if (searchScheduleHour < 8 || searchScheduleData > 18) {
    throw new AppError(400, "Hour invalid");
  }

  if (!searchPropertie) {
    throw new AppError(400, "Properties not found");
  }

  if (!searchUser) {
    throw new AppError(400, "User not found");
  }

  if (searchSchedule) {
    throw new AppError(400, "Schedule already register");
  }

  const schedule = schedulesRepo.create({
    date: date,
    hour: hour,
    property: searchPropertie,
    user: searchUser,
  });

  await schedulesRepo.save(schedule);

  return schedule;
};

export default createSchedulesService;
