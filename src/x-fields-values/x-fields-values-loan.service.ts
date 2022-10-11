import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';
import { Repository } from 'typeorm';
import { CreateXFieldsValueLoanInput } from './dto/create-x-fields-value-loan.input';
import { UpdateXFieldsValueInput } from './dto/update-x-fields-value.input';
import { XFieldsValueLoan } from './entities/x-fields-value-loan.entity';

@Injectable()
export class XFieldsValuesLoanService {
  constructor(
    @InjectRepository(XFieldsValueLoan)
    private readonly repository: Repository<XFieldsValueLoan>,
  ) {}

  async create(
    createXFieldsValueInput: CreateXFieldsValueLoanInput,
  ): Promise<XFieldsValueLoan> {
    const value = this.repository.create(createXFieldsValueInput);
    return this.repository.save(value);
  }

  async findAll(): Promise<XFieldsValueLoan[]> {
    return this.repository.find({
      relations: {
        xField: true,
        loan: true,
      },
    });
  }

  async findOne(id: number): Promise<XFieldsValueLoan> {
    return this.repository.findOne({
      where: { id },
      relations: {
        xField: true,
        loan: true,
      },
    });
  }

  async update(
    id: number,
    updateXFieldsValueInput: UpdateXFieldsValueInput,
  ): Promise<XFieldsValueLoan> {
    const value = await this.repository.preload({
      id,
      ...updateXFieldsValueInput,
    });
    if (!value) {
      throw new NotFoundException(`Field value #${id} not found.`);
    }

    return this.repository.save(value);
  }

  async remove(id: number): Promise<XFieldsValueLoan> {
    const value = await this.findOne(id);
    if (!value) {
      throw new NotFoundException(`Field value #${id} not found.`);
    }

    return this.repository.softRemove(value);
  }
}
