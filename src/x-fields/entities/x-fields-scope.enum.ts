import { registerEnumType } from '@nestjs/graphql';

export enum XFieldScope {
  CUSTOMER,
  LOAN,
  PAYMENT,
}

registerEnumType(XFieldScope, {
  name: 'XFieldScope',
});
