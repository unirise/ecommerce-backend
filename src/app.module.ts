import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { PartnerModule } from './partner/partner.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '76543210',
      database: 'ecommerce_db',
      autoLoadEntities: true,
      synchronize: false,
    }),CategoryModule, PartnerModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
