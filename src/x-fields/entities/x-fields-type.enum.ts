import { registerEnumType } from '@nestjs/graphql';

export enum XFieldType {
  TEXT,
  TEXTAREA,
  DROPDOWN,
  CHECKBOX,
  PHONE,
  DATE,
  MONEY,
  EMAIL,
  NUMBER,
  RATING,
}

registerEnumType(XFieldType, {
  name: 'XFieldType',
});
