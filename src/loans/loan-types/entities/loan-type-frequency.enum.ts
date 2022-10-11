import { registerEnumType } from '@nestjs/graphql';

export enum LoanPaymentFrequency {
  WEEKLY = 'weekly', // choose day of the week
  BI_WEEKLY = 'bi-weekly', // choose start
  SEMI_MONTHLY = 'semi-monthly', // choose 2 days of the month
  MONTHLY = 'monthly', // choose start
  BI_MONTHLY = 'bi-monthly', // choose start
  ANNUALLY = 'annually', // choose start
}

registerEnumType(LoanPaymentFrequency, {
  name: 'LoanPaymentFrequency',
});
