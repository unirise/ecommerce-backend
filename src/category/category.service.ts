import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  findAll() 
  {
    return ['Category 1', 'Category 2', 'Category 3'];
  }

  findById(id: number) 
  {
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    return categories[id - 1] || null;
  }

  update(id: number, updateCategoryDto: any) 
  {
    return { id, ...updateCategoryDto, message: 'Category updated' };
  }

  remove(id: number)
  {
    return { id, message: 'Category deleted' };
  }
}
