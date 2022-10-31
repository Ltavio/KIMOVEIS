import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.HOST,
        port: 5433,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [path.join(__dirname, "src/entities/*.{js,ts}")],
        migrations: [path.join(__dirname, "src/migrations/*.{js,ts}")],
      }
);

export default AppDataSource;
