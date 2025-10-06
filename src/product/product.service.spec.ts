import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

const DemoRepo = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  remove: jest.fn(),
});

type DemoRepoType<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('ProductService', () => {
  let service: ProductService;
  let repo: DemoRepoType<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        { provide: getRepositoryToken(Product), useFactory: DemoRepo },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repo = module.get(getRepositoryToken(Product));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product', async () => {
    const dto = { name: 'Test', price: 100 };
    repo.create.mockReturnValue(dto);
    repo.save.mockResolvedValue(dto);

    const result = await service.create(dto as any);
    expect(repo.create).toHaveBeenCalledWith(dto);
    expect(repo.save).toHaveBeenCalledWith(dto);
    expect(result).toEqual(dto);
  });

  it('should find all products', async () => {
    const products = [{ id: '1', name: 'A' }, { id: '2', name: 'B' }];
    repo.find.mockResolvedValue(products);

    const result = await service.findAll();
    expect(repo.find).toHaveBeenCalled();
    expect(result).toEqual(products);
  });

  it('should find one product', async () => {
    const product = { id: '1', name: 'A' };
    repo.findOne.mockResolvedValue(product);

    const result = await service.findOne('1');
    expect(repo.findOne).toHaveBeenCalledWith({ where: { id: '1' } });
    expect(result).toEqual(product);
  });

  it('should throw error if product not found', async () => {
    repo.findOne.mockResolvedValue(null);

    await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
  });

  it('should update a product', async () => {
    const product = { id: '1', name: 'A' };
    const updateDto = { name: 'B' };
    repo.findOne.mockResolvedValue(product);
    repo.save.mockResolvedValue({ ...product, ...updateDto });

    const result = await service.update('1', updateDto as any);
    expect(repo.save).toHaveBeenCalledWith({ ...product, ...updateDto });
    expect(result).toEqual({ ...product, ...updateDto });
  });

  it('should remove a product', async () => {
    const product = { id: '1', name: 'A' };
    repo.findOne.mockResolvedValue(product);
    repo.remove.mockResolvedValue(product);

    const result = await service.remove('1');
    expect(repo.remove).toHaveBeenCalledWith(product);
    expect(result).toEqual(product);
  });

  it('should throw error if product to remove is not found', async () => {
    repo.findOne.mockResolvedValue(null);

    await expect(service.remove('1')).rejects.toThrow(NotFoundException);
  });
});