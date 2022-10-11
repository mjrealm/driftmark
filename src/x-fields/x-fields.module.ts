import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { XField } from './entities/x-field.entity';
import { XFieldsResolver } from './x-fields.resolver';
import { XFieldsService } from './x-fields.service';

@Module({
  imports: [TypeOrmModule.forFeature([XField])],
  providers: [XFieldsResolver, XFieldsService],
})
export class XFieldsModule {}
