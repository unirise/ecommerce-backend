import { IsString, IsNotEmpty, IsEmail, IsOptional, IsUrl} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePartnerDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsUrl()
    logo_link: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    phone: string;

}
