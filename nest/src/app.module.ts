import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { GlobalModule } from './global/global.module';

@Module({
  // 声明引入的其他模块
  imports: [CatsModule, GlobalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
