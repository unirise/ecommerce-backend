import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, HttpCode, HttpStatus, UsePipes } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService){};

  @Post()
  @ApiOperation({summary: `Create a product`})
  @ApiCreatedResponse({type: Product})
  @ApiBadRequestResponse()
  @UsePipes(new ValidationPipe({transform: true}))
  create(@Body() createProductDto: CreateProductDto){
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({summary: `Get all Products`})
  @ApiOkResponse({type: [Product]})
  findAll(){
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: `Get Product by id`})
  @ApiOkResponse({type: Product})
  @ApiNotFoundResponse()
  findOne(@Param('id') id: string){
    return this.productService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: `Update product details` })
  @ApiOkResponse({type: Product})
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  @UsePipes(new ValidationPipe({transform: true}))
  update(@Param('id') id: string, @Body(new ValidationPipe({ whitelist: true })) updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product' })
  @ApiOkResponse({description: `Message deleted successfully`})
  @ApiNotFoundResponse()
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
