import { DataSource } from "typeorm";
import { Category } from "./category/entities/category.entity";

export const appSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres', 
  password: '76543210', 
  database: 'ecommerce_db',
  entities: [Category],
  migrations: ['src/migrations/*.ts'],
  synchronize: false
})
