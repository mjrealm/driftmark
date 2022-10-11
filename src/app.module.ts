import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { CustomersModule } from './customers/customers.module';
import { LoansModule } from './loans/loans.module';
import { XFieldsValuesModule } from './x-fields-values/x-fields-values.module';
import { XFieldsModule } from './x-fields/x-fields.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'cockroachdb',
      url: process.env.COCKROACHDB_URL,
      ssl: false,
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
      // migrations: ["src/migration/**/*.ts"],
      // subscribers: ["src/subscriber/**/*.ts"],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // debug: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
        numberScalarMode: 'integer',
      },
    }),
    CustomersModule,
    CompanyModule,
    LoansModule,
    XFieldsModule,
    XFieldsValuesModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
