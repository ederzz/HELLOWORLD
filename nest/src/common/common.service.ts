import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  log(message: string) {
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }
}
