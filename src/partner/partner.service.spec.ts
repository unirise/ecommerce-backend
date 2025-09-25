import { PartnerService } from './partner.service';
import { Partner } from './entities/partner.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestingModule, Test} from '@nestjs/testing'

const demoRepo = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  delete: jest.fn(),
});

type demoRepo<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
describe('PartnerService', () => {
    let service: PartnerService;
    let repo: demoRepo<Partner>;

    beforeEach(async () => {
        const test: TestingModule = await Test.createTestingModule({
            providers: [
                PartnerService,
                { provide: getRepositoryToken(Partner), useFactory: demoRepo }
            ],
        }).compile();

        service = test.get<PartnerService>(PartnerService);
        repo = test.get(getRepositoryToken(Partner));
    });

    it('Should create a partner', async () => {
        const dto = { name: 'SchoolNameA', logo_link: 'http://Schoollogo', address: 'SchoolAdress', email: 'school@gmail.com', phone: '1234567890' };
        (repo.create as jest.Mock).mockReturnValue(dto);
        (repo.save as jest.Mock).mockResolvedValue(dto);

        const result = await service.create(dto);
        expect(repo.create).toHaveBeenCalledWith(dto);
        expect(repo.save).toHaveBeenCalledWith(dto);
        expect(result).toEqual(dto);
    });

    it('Should find all partners', async () => {
        const partners = [{ id: '1', name: 'SchoolNameA' }, { id: '2', name: 'SchoolNameB' }];
        (repo.find as jest.Mock).mockResolvedValue(partners);

        const result = await service.findAll();
        expect(repo.find).toHaveBeenCalled();
        expect(result).toEqual(partners);
    });

    it('Should find one partner', async () => {
        const partner = { id: '1', name: 'SchoolNameA' };
        (repo.findOne as jest.Mock).mockResolvedValue(partner);

        const result = await service.findOne('1');
        expect(repo.findOne).toHaveBeenCalledWith({ where: { id: '1' } });
        expect(result).toEqual(partner);
    });

    it('Should throw error if partner not found', async () => {
        (repo.findOne as jest.Mock).mockResolvedValue(null);

        await expect(service.findOne('1')).rejects.toThrow('Partner not found');
    });

    it('Should update a partner', async () => {
        const partner = { id: '1', name: 'SchoolNameA' };
        const updateDto = { name: 'SchoolNameB' };
        (repo.findOne as jest.Mock).mockResolvedValue(partner);
        (repo.save as jest.Mock).mockResolvedValue({ ...partner, ...updateDto });

        const result = await service.update('1', updateDto);
        expect(repo.save).toHaveBeenCalledWith({ ...partner, ...updateDto });
        expect(result).toEqual({ ...partner, ...updateDto });
    });

    it('Should remove a partner', async () => {
        (repo.delete as jest.Mock).mockResolvedValue({ affected: 1 });

        await service.remove('1');
        expect(repo.delete).toHaveBeenCalledWith('1');
    });

    it('Should throw error if partner to remove is not found', async () => {
        (repo.delete as jest.Mock).mockResolvedValue({ affected: 0 });

        await expect(service.remove('1')).rejects.toThrow('Partner is not found');
    });
});