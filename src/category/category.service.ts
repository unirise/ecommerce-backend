import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  findAll() {
    return ['Category 1', 'Category 2', 'Category 3'];
  }
}
