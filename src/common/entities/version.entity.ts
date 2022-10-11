import { ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@ObjectType()
export abstract class Versioned {
  /**
   * Version control for this resource.
   */
  @VersionColumn()
  _version: number;

  /**
   * Timestamp when this resource was created.
   */
  @CreateDateColumn()
  _created: Date;

  /**
   * Timestamp when this resource was updated.
   */
  @UpdateDateColumn()
  _updated: Date;

  /**
   * Timestamp when this resource was soft-deleted.
   */
  @DeleteDateColumn()
  _deleted?: Date;
}
