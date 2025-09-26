import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateProductDto {
    @ApiProperty({description: 'Product name', example: 'Rakhi'})
    @IsString()
    name: string;

    @ApiProperty({description: 'Product description', example: 'A beautiful Rakhi'})
    @IsString()
    description: string;

    @ApiProperty({description: 'Product code', example: 'RKH-001'})
    @IsString()
    code: string;

    @ApiProperty({description: 'Category ID', example: 'cat-001'})
    @IsString()
    id_category: string;

    @ApiProperty({description: 'Partner ID', example: 'partner-001'})
    @IsString()
    id_partner: string;

    @ApiProperty({description: 'Tax percentage', example: 15})
    @IsNumber()
    tax_percentage: number;
}
