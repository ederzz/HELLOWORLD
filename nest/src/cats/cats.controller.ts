import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CommonService } from '../common/common.service';
import { GlobalService } from '../global/global.service';
import { LoggerService } from '../logger/logger.service';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly commonService: CommonService,
    private readonly globalService: GlobalService,
  ) {}

  @Post()
  create(@Body() createCatDto: { name: string; age: number; breed: string }) {
    console.log('createCatDto', createCatDto);
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: { limit: number }) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Get('log/a')
  log() {
    this.loggerService.log(`${'eder'}, This action returns all cats`);
    this.commonService.log(`${'eder'}, This action returns all cats`);
    this.globalService.log(`${'eder'}, This action returns all cats`);
    return 'This action returns all cats';
  }
}
