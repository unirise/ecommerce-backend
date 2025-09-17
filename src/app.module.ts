import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
import { PartnerModule } from './partner/partner.module';

@Module({
  imports: [CategoryModule, ProductsModule, PartnerModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
