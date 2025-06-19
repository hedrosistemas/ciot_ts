// error-invalid-type.ts
import { ErrorBase } from './error-base';

export class ErrorInvalidType extends ErrorBase {
  constructor() {
    super("Invalid type");
  }
}
