import { Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';
import { CatsController } from './cats.controller';

@Module({
  imports: [LoggerModule],
  controllers: [CatsController],
})
export class CatsModule {}
