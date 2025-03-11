import { Global, Module } from '@nestjs/common';
import { GlobalService } from './global.service';

// 全局模块
@Global()
@Module({
  providers: [GlobalService],
  exports: [GlobalService],
})
export class GlobalModule {}
