import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoanInput } from './dto/create-loan.input';
import { UpdateLoanInput } from './dto/update-loan.input';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoansService {
  constructor(
    @InjectRepository(Loan)
    private readonly loanRepository: Repository<Loan>,
  ) {}

  async create(createLoanInput: CreateLoanInput): Promise<Loan> {
    const loan = this.loanRepository.create(createLoanInput);
    return this.loanRepository.save(loan);
  }

  async findAll(): Promise<Loan[]> {
    return this.loanRepository.find({
      relations: {
        customer: true,
        loanType: true,
        xFieldValues: { xField: true },
      },
    });
  }

  async findOne(id: number): Promise<Loan> {
    return this.loanRepository.findOne({
      where: { id },
      relations: {
        customer: true,
        loanType: true,
        xFieldValues: { xField: true },
      },
    });
  }

  async update(id: number, updateLoanInput: UpdateLoanInput): Promise<Loan> {
    const loan: Loan = await this.loanRepository.preload({
      id,
      ...updateLoanInput,
    });

    if (!loan) {
      throw new NotFoundException(`Loan #${id} not found`);
    }

    return await this.loanRepository.save(loan);
  }

  async remove(id: number): Promise<Loan> {
    const loan = await this.findOne(id);
    if (!loan) {
      throw new NotFoundException(`Loan #${id} not found`);
    }
    return await this.loanRepository.softRemove(loan);
  }
}
