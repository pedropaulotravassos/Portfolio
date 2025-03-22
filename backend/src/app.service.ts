import { Injectable } from '@nestjs/common';
import { teste } from '@core';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ' + teste;
  }
}
