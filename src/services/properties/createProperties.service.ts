import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appErrors";
import { Properties } from "../../entities/properties.entity";
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";

const createPropertiesService = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest): Promise<Properties[]> => {
  const propertiesRepo = AppDataSource.getRepository(Properties);
  const addressRepo = AppDataSource.getRepository(Addresses);
  const categoriesRepo = AppDataSource.getRepository(Categories);

  const { district, zipCode, number, city, state }: IAddressRequest = address;

  const searchAddress = await addressRepo.findOneBy({
    zipCode,
  });

  if (searchAddress) {
    throw new AppError(400, "address already registered");
  }

  const addresses = addressRepo.create({
    district,
    zipCode,
    number,
    city,
    state,
  });

  await addressRepo.save(addresses);

  const searchCategories = await categoriesRepo.findOneBy({
    id: categoryId,
  });

  if (!searchCategories) {
    throw new AppError(400, "category not found");
  }

  /*   const properties = new Properties()
  properties.value = value
  properties.size = size
  properties.addresses = addresses
  properties. */

  await propertiesRepo.save(properties);

  return properties;
};

export default createPropertiesService;
