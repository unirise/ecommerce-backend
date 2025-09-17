import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Partner } from './entities/partner.entity';

@ApiTags('partner')
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Post()
  @ApiOperation({summary: `Create a partner`})
  @ApiResponse({status: 201, description: 'Partner created', type: Partner})
  create(@Body(new ValidationPipe({whitelist: true})) createPartnerDto: CreatePartnerDto){
    return this.partnerService.create(createPartnerDto);
  }

  @Get()
  @ApiOperation({summary: `Get all Partners`})
  findAll(){
    return this.partnerService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: `Get Partner id`})
  findOne(@Param('id') id: string){
    return this.partnerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: `Update partner details` })
  update(@Param('id') id: string, @Body(new ValidationPipe({ whitelist: true })) updatePartnerDto: UpdatePartnerDto) {
    return this.partnerService.update(id, updatePartnerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete partner' })
  remove(@Param('id') id: string) {
    return this.partnerService.remove(id);
  }

}
