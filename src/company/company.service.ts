import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>,
  ) {}

  async create(createCompanyInput: CreateCompanyInput): Promise<Company> {
    const company: Company = this.companyRepository.create(createCompanyInput);
    return await this.companyRepository.save(company);
  }

  async findAll(): Promise<Company[]> {
    return await this.companyRepository.find();
  }

  async findOne(id: number): Promise<Company> {
    return await this.companyRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateCompanyInput: UpdateCompanyInput,
  ): Promise<Company> {
    const company: Company = await this.companyRepository.preload({
      id,
      ...updateCompanyInput,
    });

    if (!company) {
      throw new NotFoundException(`Company #${id} not found`);
    }

    return await this.companyRepository.save(company);
  }

  async remove(id: number): Promise<Company> {
    throw new BadRequestException(`Cannot delete company #${id}`);
  }
}
