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
}: IPropertyRequest): Promise<Properties> => {
  const propertiesRepo = AppDataSource.getRepository(Properties);
  const addressRepo = AppDataSource.getRepository(Addresses);
  const categoriesRepo = AppDataSource.getRepository(Categories);

  const { district, zipCode, number, city, state }: IAddressRequest = address;

  const verifyProperty = await propertiesRepo.findOneBy({ addresses: address });
  const verifyAddresss = await addressRepo.findOneBy({ zipCode: zipCode });
  const verifyCategory = await categoriesRepo.findOneBy({ id: categoryId });
  if (zipCode.length > 8) {
    throw new AppError(400, "Invalid ZipCode");
  }
  if (verifyProperty) {
    throw new AppError(400, "Property already exists");
  }
  if (!verifyCategory) {
    throw new AppError(404, "category not found");
  }
  if (verifyAddresss) {
    throw new AppError(400, "Address already registred");
  }

  const addresses = addressRepo.create({
    district,
    zipCode,
    number,
    city,
    state,
  });

  await addressRepo.save(addresses);

  const properties = propertiesRepo.create({
    value: value,
    size: size,
    addresses: addresses,
    category: verifyCategory,
  });

  await propertiesRepo.save(properties);

  return properties;
};

export default createPropertiesService;
