import { Injectable } from '@nestjs/common';
import { CommonService } from '../common/common.service';

@Injectable()
export class LoggerService {
  constructor(private readonly commonService: CommonService) {}

  log(message: string) {
    this.commonService.log(message);
  }

  error(message: string) {
    this.commonService.error(message);
  }
}
