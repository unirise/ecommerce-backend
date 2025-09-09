import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService], // optional, only if other modules need it
})
export class CategoryModule {}
