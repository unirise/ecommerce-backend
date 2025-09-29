import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, HttpCode, HttpStatus, UsePipes } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { Partner } from './entities/partner.entity';

@ApiTags('partner')
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Post()
  @ApiOperation({summary: `Create a partner`})
  @ApiCreatedResponse({type: Partner})
  @ApiBadRequestResponse()
  @UsePipes(new ValidationPipe({transform: true}))
  create(@Body() createPartnerDto: CreatePartnerDto){
    return this.partnerService.create(createPartnerDto);
  }

  @Get()
  @ApiOperation({summary: `Get all Partners`})
  @ApiOkResponse({type: [Partner]})
  findAll(){
    return this.partnerService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: `Get Partner by ID`})
  @ApiOkResponse({type: Partner})
  @ApiNotFoundResponse()
  findOne(@Param('id') id: string){
    return this.partnerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: `Update partner details` })
  @ApiOkResponse({type: Partner})
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  @UsePipes(new ValidationPipe({transform: true}))
  update(@Param('id') id: string, @Body()updatePartnerDto: UpdatePartnerDto) {
    return this.partnerService.update(id, updatePartnerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete partner' })
  @ApiOkResponse({description: `Partner deleted successfully`})
  @ApiNotFoundResponse()
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.partnerService.remove(id);
  }

}
