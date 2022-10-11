import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@ObjectType()
@InputType('AddressInput')
export class Address {
  @Column({ nullable: true })
  street1?: string;

  @Column({ nullable: true })
  street2?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  zipCode?: string;
}
