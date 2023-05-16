/*
 * @Author: xiao
 * @Date: 2023-05-16 23:20:43
 * @LastEditors: xiao
 * @LastEditTime: 2023-05-16 23:47:14
 * @Description:
 */
import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger/dist';

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示帖子列表' })
  index() {
    return [];
  }

  @Post()
  create() {
    return {
      state: 200,
      msg: '创建成功',
    };
  }

  @Get(':id')
  getDetail() {
    return {
      id: 1,
      detail: 'this is detail',
    };
  }
}
