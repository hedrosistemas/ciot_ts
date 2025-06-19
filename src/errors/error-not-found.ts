import { ErrorBase } from './error-base';

export class ErrorNotFound extends ErrorBase {
  constructor() {
    super("Not found");
  }
}
