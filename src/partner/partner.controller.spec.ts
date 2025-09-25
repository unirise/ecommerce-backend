import { PartnerController } from './partner.controller';
import { PartnerService } from './partner.service';
import { TestingModule, Test} from '@nestjs/testing'

const DemoRepo = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('PartnerController', () => {
  let controller: PartnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartnerController],
      providers: [{ provide: PartnerService, useValue: DemoRepo }],
    }).compile();

    controller = module.get<PartnerController>(PartnerController);
  });

  it('create should call service.create', async () => {
    DemoRepo.create.mockResolvedValue({ id: '1', name: 'SchoolNameA' });
    await expect(
      controller.create({ name: 'SchoolNameA', logo_link: 'http://SchoolLogo', address: 'SchoolAddress', email: 'school.com', phone: '1234567890' } as any)
    ).resolves.toHaveProperty('id');
  });

  it('findAll should call service.findAll', async () => {
    DemoRepo.findAll.mockResolvedValue([]);
    await expect(controller.findAll()).resolves.toEqual([]);
  });
});



