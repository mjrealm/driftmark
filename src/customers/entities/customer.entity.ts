import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Customer {
  @Field((type) => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field((type) => String, { nullable: false })
  @Column({ length: 100, nullable: false })
  firstName: string;

  @Field((type) => String, { nullable: false })
  @Column({ length: 100, nullable: false })
  lastName: string;
}
