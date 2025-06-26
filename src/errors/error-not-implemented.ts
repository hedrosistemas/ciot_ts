// error-not-implemented.ts
import { Err } from '../protos/ciot/proto/v2/errors';
import { ErrorBase } from './error-base';

export class ErrorNotImplemented extends ErrorBase {
  constructor() {
    super("Not implemented");
    this.code = Err.NOT_IMPLEMENTED;
  }
}
