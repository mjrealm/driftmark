import { nanoid } from 'nanoid';

export class NanoIDUtils {
  private static DEFAULT_NANOID_SIZE = 4;
  public static generateReferenceId(prefix: string, size?: number): string {
    return `${prefix}-${new Date().getFullYear()}-${nanoid(
      size ?? NanoIDUtils.DEFAULT_NANOID_SIZE,
    )}`;
  }
}
