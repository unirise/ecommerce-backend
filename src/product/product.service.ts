import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ){}
  
  async create(createProductDto: CreateProductDto): Promise<Product>{
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]>{
    return this.productRepository.find();
  }

  async findOne(id: string): Promise<Product>{
    const product = await this.productRepository.findOne({
      where: {id}
    });
    if(!product){
      throw new NotFoundException("Product is not found");
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product>{
    const updateProduct = await this.findOne(id);
    Object.assign(updateProduct, updateProductDto)
    return this.productRepository.save(updateProduct);
  }

  async remove(id: string): Promise<Product>{
    const product = await this.findOne(id);
    return this.productRepository.remove(product);
  }

}
