import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { Partner } from './entities/partner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PartnerController],
  providers: [PartnerService],
  imports: [TypeOrmModule.forFeature([Partner])],
  exports: [PartnerService]
})
export class PartnerModule {}
