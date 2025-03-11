import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { LoggerService } from './logger.service';

@Module({
  imports: [CommonModule],
  exports: [CommonModule, LoggerService],
  providers: [LoggerService],
})
export class LoggerModule {}
