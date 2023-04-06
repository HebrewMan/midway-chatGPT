// src/controller/weather.controller.ts
import { Controller, Get, Inject, Query,Post ,Body} from '@midwayjs/core';
import { WeatherService } from '../service/weather.service';
import { UserService } from '../service/user.service';

import { Context } from '@midwayjs/koa';

@Controller('/user')
export class UserController {

  @Inject()
  weatherService: WeatherService;

  @Inject()
  userService: UserService;

  @Inject()
  ctx: Context;


  @Get('/')
  async getUserInfo(@Query('uid') uid) {
    const res = await this.userService.getUserInfo({ uid });
    return { success: true, message: 'OK', data: res };
  }

  @Get('/invite')
  async getUserInviteInfo(@Query('uid') uid) {
    const res = await this.userService.getUserIntiveInfo(uid);
    return { success: true, message: 'OK', data: res };
  }


  @Post('/login')
  async login(@Body() body) {
    const { username, password } = body;
    const res = await this.userService.login(username, password);
    if (res) {
      return { code: 200, message: '登录成功', data: res };
    } else {
      return { code: 400, message: '用户名或密码错误' };
    }
  }

  @Post('/register')
  async register(@Body() body) {
    const { username, password } = body;
    const res = await this.userService.register(username, password,123456);
    if (res) {
      return { code: 200, message: '注册成功', data: res };
    } else {
      return { code: 400, message: '用户名已存在' };
    }
  }

  @Post('/pay')
  async pay(@Body() body) {
    const { uid, amount } = body;
    const res = await this.userService.pay(uid, amount);
    if (res) {
      return { code: 200, message: '充值成功', data: res };
    } else {
      return { code: 400, message: '充值失败' };
    }
  }
  

}