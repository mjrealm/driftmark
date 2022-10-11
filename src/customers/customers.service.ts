import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerInput: CreateCustomerInput): Promise<Customer> {
    const customer = this.customerRepository.create(createCustomerInput);
    return await this.customerRepository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.find({
      relations: {
        loans: true,
        xFieldValues: { xField: true },
      },
    });
  }

  async findOne(id: string): Promise<Customer> {
    return await this.customerRepository.findOne({
      where: { id },
      relations: { loans: true, xFieldValues: { xField: true } },
    });
  }

  async update(
    id: string,
    updateCustomerInput: UpdateCustomerInput,
  ): Promise<Customer> {
    const customer: Customer = await this.customerRepository.preload({
      id,
      ...updateCustomerInput,
    });

    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }

    return await this.customerRepository.save(customer);
  }

  async remove(id: string): Promise<Customer> {
    const customer = await this.findOne(id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return await this.customerRepository.softRemove(customer);
  }
}
