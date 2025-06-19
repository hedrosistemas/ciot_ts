// error-not-implemented.ts
import { ErrorBase } from './error-base';

export class ErrorInvalidConfig extends ErrorBase {
  constructor() {
    super("Invalid Configuration");
  }
}
