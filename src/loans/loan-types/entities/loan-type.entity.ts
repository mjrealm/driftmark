import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Versioned } from 'src/common/entities/version.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LoanPaymentFrequency } from './loan-type-frequency.enum';

@ObjectType()
@InputType('LoanTypeInput')
@Entity()
export class LoanType extends Versioned {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: LoanPaymentFrequency.ANNUALLY })
  frequency: LoanPaymentFrequency;

  /**
   * Only required for the ff:
   * Weekly - day of week
   * Semi-Monthly - days of month
   */
  @Column('simple-array', { nullable: true })
  days?: number[];

  /**
   * Set a description for this loan type
   */
  @Column({ nullable: true })
  description?: string;
}
