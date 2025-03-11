import { Injectable } from '@nestjs/common';

/**
 * injectable 装饰器用于标识一个类可以被注入到其他类中。
 * 会添加元数据，保证能够被找到，同时也是保持一个统一性
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
