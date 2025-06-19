// error-http-request.ts
import { ErrorBase } from './error-base';

export class ErrorHttpRequest extends ErrorBase {
  status: number;
  body: Uint8Array;

  constructor(status: number, body: Uint8Array) {
    super(`HTTP request failed with status ${status}`);
    this.status = status;
    this.body = body;
  }
}
