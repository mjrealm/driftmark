import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Versioned } from 'src/common/entities/version.entity';
import { XField } from 'src/x-fields/entities/x-field.entity';
import {
  Column,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
export abstract class XFieldsValue extends Versioned {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The xField ID foreign key
   */
  @PrimaryColumn()
  xFieldId: number;

  @ManyToOne(() => XField)
  xField: XField;

  /**
   * Actual value of xField
   */
  @Column()
  value: string;
}
