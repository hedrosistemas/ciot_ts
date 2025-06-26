// error-exception.ts
import { Err } from '../protos/ciot/proto/v2/errors';
import { ErrorBase } from './error-base';

export class ErrorException extends ErrorBase {
  exception: unknown;

  constructor(e: unknown) {
    super(`Wrapped exception: ${e instanceof Error ? e.message : String(e)}`);
    this.exception = e;
    this.code = Err.EXCEPTION;
  }
}
