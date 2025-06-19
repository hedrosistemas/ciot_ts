// error-base.ts
export abstract class ErrorBase extends Error {
  constructor(message?: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
