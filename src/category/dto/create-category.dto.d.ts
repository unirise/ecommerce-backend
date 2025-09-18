import { IsNotEmpty, IsOptional, IsInt } from 'class-validator';
import { Category } from '../entities/category.entity';

export class CreateCategoryDto {
  @IsNotEmpty()
  category_name: string;

  @IsOptional()
  @IsInt()
  parent_category_id?: number;
}
