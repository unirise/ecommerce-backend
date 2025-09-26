import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsInt()
  category_id: number;

  @IsString()
  category_name: string;

  @IsOptional()
  @IsInt()
  parent_category_id?: number;
}
