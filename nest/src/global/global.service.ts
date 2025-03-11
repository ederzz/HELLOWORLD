import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalService {
  log(message: string) {
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }
}
