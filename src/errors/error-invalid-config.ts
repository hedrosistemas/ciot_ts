// error-not-implemented.ts
import { Err } from '../protos/ciot/proto/v2/errors';
import { ErrorBase } from './error-base';

export class ErrorInvalidConfig extends ErrorBase {
  constructor() {
    super("Invalid Configuration");
    this.code = Err.INVALID_ARG
  }
}
