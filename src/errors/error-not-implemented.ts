// error-not-implemented.ts
import { ErrorBase } from './error-base';

export class ErrorNotImplemented extends ErrorBase {
  constructor() {
    super("Not implemented");
  }
}
