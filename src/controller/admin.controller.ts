// src/controller/weather.controller.ts
import { Controller, Get, Inject, } from '@midwayjs/core';
import { WeatherService } from '../service/weather.service';
import { AdminService } from '../service/admin.service';

import { Context } from '@midwayjs/koa';

@Controller('/admin')
export class UserController {

  @Inject()
  weatherService: WeatherService;

  @Inject()
  adminService: AdminService;

  @Inject()
  ctx: Context;


  @Get('/')
  async getUserInfo() {
    const res = await this.adminService.getAdminInfo();
    return { success: true, message: 'OK', data: res };
  }

}