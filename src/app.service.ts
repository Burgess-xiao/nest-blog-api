/*
 * @Author: xiao
 * @Date: 2023-05-16 22:59:39
 * @LastEditors: xiao
 * @LastEditTime: 2023-05-16 23:11:22
 * @Description:
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hello, you rouned service!';
  }
}
