import { DataSource } from "typeorm";
import { Category } from "./category/entities/category.entity";
import * as dotenv from 'dotenv';
import process from "process";
dotenv.config();

export const appSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  username: process.env.DB_USERNAME || 'postgres', 
  password: process.env.DB_PASSWORD || '76543210', 
  database: process.env.DB_NAME || 'ecommerce_db',
  entities: [Category],
  migrations: ['src/migrations/*.ts'],
  synchronize: (process.env.TYPEORM_SYNCHRONIZE === 'true' ) || false
});
