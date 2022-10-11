import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateXFieldInput } from './dto/create-x-field.input';
import { UpdateXFieldInput } from './dto/update-x-field.input';
import { XField } from './entities/x-field.entity';
import { XFieldScope } from './entities/x-fields-scope.enum';

@Injectable()
export class XFieldsService {
  constructor(
    @InjectRepository(XField)
    private readonly xFieldRepository: Repository<XField>,
  ) {}

  async create(createXFieldInput: CreateXFieldInput): Promise<XField> {
    const xField = this.xFieldRepository.create(createXFieldInput);
    return this.xFieldRepository.save(xField);
  }

  async findAll(): Promise<XField[]> {
    return this.xFieldRepository.find();
  }

  async findAllByScope(scope: XFieldScope): Promise<XField[]> {
    return this.xFieldRepository.find({
      where: { scope: scope },
    });
  }

  async findOne(id: number): Promise<XField> {
    return this.xFieldRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateXFieldInput: UpdateXFieldInput,
  ): Promise<XField> {
    const xField = await this.xFieldRepository.preload({
      id,
      ...updateXFieldInput,
    });
    if (!xField) {
      throw new NotFoundException(`Custom Field #${id} not found.`);
    }

    // TODO check if dropdown options were updated
    // If yes, need to check all values that has that option

    return this.xFieldRepository.save(xField);
  }

  async remove(id: number): Promise<XField> {
    const xField = await this.findOne(id);
    if (!xField) {
      throw new NotFoundException(`Custom Field #${id} not found.`);
    }

    // TODO same here

    return this.xFieldRepository.softRemove(xField);
  }
}
