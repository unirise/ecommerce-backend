import { Injectable, NotFoundException} from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { Repository } from 'typeorm';
import { Partner } from './entities/partner.entity';
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(Partner)
    private readonly partnersRepository: Repository<Partner>,
  ){};

  async create(createPartnerdto: CreatePartnerDto): Promise<Partner>{
    const partner = this.partnersRepository.create(createPartnerdto);
    return this.partnersRepository.save(partner);
  }

  async findAll(): Promise<Partner[]>{
  return this.partnersRepository.find()
  }

  async findOne(id: string): Promise<Partner>{
    const partner = await this.partnersRepository.findOne({
      where: {id}
    });
    if(!partner){
      throw new NotFoundException(`Partner not found`);
    }
    return partner;
  }

  async update(id: string, updatePartnerDto: UpdatePartnerDto): Promise<Partner>{
    const updatePartner = await this.findOne(id);
    Object.assign(updatePartner, updatePartnerDto);
    return this.partnersRepository.save(updatePartner);
  }

  async remove(id: string): Promise<void>{
    const removePartner = this.partnersRepository.delete(id);
    if((await removePartner).affected === 0){
      throw new NotFoundException(`Partner is not found`);
    }
  }
  
}
