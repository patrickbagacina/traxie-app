export abstract class ApiException extends Error {}

export class BadRequestException extends ApiException {
  error: any;
  
  constructor(error) {
    super();

    this.error = error;
  }
}

export class UnauthorizedException extends ApiException {
  constructor() {
    super();
  }
}

export class ForbiddenException extends ApiException {
  constructor() {
    super();
  }
}

export class ServerException extends ApiException {
  constructor() {
    super();
  }
}