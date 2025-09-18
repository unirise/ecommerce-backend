import { PartialType } from '@nestjs/mapped-types';
import { CreatePartnerDto } from './create-partner.dto';
import { IsOptional, IsUrl, IsString } from 'class-validator';

export class UpdatePartnerDto extends PartialType(CreatePartnerDto) {
    
    @IsString()
    name?: string;

    @IsOptional()
    @IsUrl()
    logo_link?: string;

    @IsString()
    phone?: string;
    
}
