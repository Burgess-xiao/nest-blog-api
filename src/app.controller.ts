/*
 * @Author: xiao
 * @Date: 2023-05-16 22:59:39
 * @LastEditors: xiao
 * @LastEditTime: 2023-05-16 23:41:30
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { AppService } from './app.service';
@Controller()
@ApiTags('默认')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
