import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateXFieldsValueCustomerInput } from './dto/create-x-fields-value-customer.input';
import { UpdateXFieldsValueInput } from './dto/update-x-fields-value.input';
import { XFieldsValueCustomer } from './entities/x-fields-value-customer.entity';

@Injectable()
export class XFieldsValuesCustomerService {
  constructor(
    @InjectRepository(XFieldsValueCustomer)
    private readonly repository: Repository<XFieldsValueCustomer>,
  ) {}

  async create(
    createXFieldsValueInput: CreateXFieldsValueCustomerInput,
  ): Promise<XFieldsValueCustomer> {
    return this.repository.save(createXFieldsValueInput);
  }

  async findAll(): Promise<XFieldsValueCustomer[]> {
    return this.repository.find({
      relations: { xField: true, customer: true },
    });
  }

  async findOne(id: number): Promise<XFieldsValueCustomer> {
    return this.repository.findOne({
      where: { id },
      relations: {
        xField: true,
        customer: true,
      },
    });
  }

  async update(
    id: number,
    updateXFieldsValueInput: UpdateXFieldsValueInput,
  ): Promise<XFieldsValueCustomer> {
    const value = await this.repository.preload({
      id,
      ...updateXFieldsValueInput,
    });
    if (!value) {
      throw new NotFoundException(`Field value #${id} not found.`);
    }

    return this.repository.save(value);
  }

  async remove(id: number): Promise<XFieldsValueCustomer> {
    const value = await this.findOne(id);
    if (!value) {
      throw new NotFoundException(`Field value #${id} not found.`);
    }

    return this.repository.softRemove(value);
  }
}
