import { Err } from '../protos/ciot/proto/v2/errors';
import { ErrorBase } from './error-base';

export class ErrorNotFound extends ErrorBase {
  constructor() {
    super("Not found");
    this.code = Err.NOT_FOUND
  }
}
