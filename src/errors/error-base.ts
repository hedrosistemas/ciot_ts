import { Err } from "../protos/ciot/proto/v2/errors";

export abstract class ErrorBase extends Error {
  code: Err;
  constructor(message?: string, code: Err = Err.FAIL) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
  }
}
