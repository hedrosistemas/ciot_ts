// error-exception.ts
import { ErrorBase } from './error-base';

export class ErrorException extends ErrorBase {
  exception: unknown;

  constructor(e: unknown) {
    super(`Wrapped exception: ${e instanceof Error ? e.message : String(e)}`);
    this.exception = e;
  }
}
