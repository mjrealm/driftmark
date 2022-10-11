import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Versioned } from 'src/common/entities/version.entity';
import { Address } from 'src/customers/entities/address.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Company extends Versioned {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column(() => Address)
  address: Address;

  @Column()
  phone: string;

  @Column()
  email: string;
}
