import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  /**
   * Nest.js 的 DI 容器会解析构造函数，发现它需要 AppService，然后从 providers 中找到并注入对应的实例。
   * 通过声明的方式引入，不关注实现，实现解耦；实现单例共享；
   * @param appService
   */
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
