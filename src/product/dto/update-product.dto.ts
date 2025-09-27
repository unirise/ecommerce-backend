import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsString, IsNumber } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
    name: string;
    
    @IsString()
    description: string;

    @IsString()
    code: string;   

    @IsNumber()
    tax_percentage: number;
}
