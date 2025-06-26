// error-invalid-type.ts
import { Err } from '../protos/ciot/proto/v2/errors';
import { ErrorBase } from './error-base';

export class ErrorInvalidType extends ErrorBase {
  constructor() {
    super("Invalid type");
    this.code = Err.INVALID_TYPE
  }
}
