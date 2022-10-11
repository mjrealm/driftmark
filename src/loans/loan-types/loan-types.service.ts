import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoanTypeInput } from './dto/create-loan-type.input';
import { UpdateLoanTypeInput } from './dto/update-loan-type.input';
import { LoanType } from './entities/loan-type.entity';

@Injectable()
export class LoanTypesService {
  constructor(
    @InjectRepository(LoanType)
    private readonly loanTypeRepository: Repository<LoanType>,
  ) {}

  async create(createLoanTypeInput: CreateLoanTypeInput): Promise<LoanType> {
    const loanType = this.loanTypeRepository.create(createLoanTypeInput);
    return this.loanTypeRepository.save(loanType);
  }

  async findAll(): Promise<LoanType[]> {
    return this.loanTypeRepository.find();
  }

  async findOne(id: number): Promise<LoanType> {
    return this.loanTypeRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateLoanTypeInput: UpdateLoanTypeInput,
  ): Promise<LoanType> {
    const loanType: LoanType = await this.loanTypeRepository.preload({
      id,
      ...updateLoanTypeInput,
    });

    if (!loanType) {
      throw new NotFoundException(`Loan type #${id} not found`);
    }

    return await this.loanTypeRepository.save(loanType);
  }

  async remove(id: number): Promise<LoanType> {
    const loanType = await this.findOne(id);
    if (!loanType) {
      throw new NotFoundException(`Loan type #${id} not found`);
    }
    return await this.loanTypeRepository.softRemove(loanType);
  }
}
