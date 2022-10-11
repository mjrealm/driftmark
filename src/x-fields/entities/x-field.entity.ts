import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Versioned } from 'src/common/entities/version.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { XFieldScope } from './x-fields-scope.enum';
import { XFieldType } from './x-fields-type.enum';

@ObjectType()
@InputType('XFieldInput')
@Entity()
export class XField extends Versioned {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Name of the custom field
   */
  @Column()
  name: string;

  /**
   * Fixed list of types
   */
  @Column()
  type: XFieldType;

  /**
   * Fixed list of scopes
   */
  @Column()
  scope: XFieldScope;

  /**
   * Default value for this xField. Applies only to select xFields.
   */
  @Column({ nullable: true })
  default?: string;

  /**
   * Wether this xField is required to have a value.
   */
  @Column()
  required: boolean;

  /**
   * The order in which this xField will appear. Defaults to 1.
   */
  @Column({ default: 1 })
  orderIndex: number;

  /**
   * For some XFieldType like dropdown, options can be added.
   */
  @Column('simple-array', { nullable: true })
  options?: string[];
}
