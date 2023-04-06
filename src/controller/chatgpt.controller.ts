import { Inject, Controller, Get,Body, Query ,Post} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { ChatGptService } from '../service/chatgpt.service';

@Controller('/chat')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  chatGptService: ChatGptService;

  @Get('/history')
  async getUserChatData(@Query('uid') uid) {
    const res = await this.chatGptService.getUserChatData(uid);
    return { success: true, message: 'OK', data: res };
  }

  @Post('/sendMessage')
  async sendMessage(@Body() body) {
    const {text} = body;
    const res = await this.chatGptService.sendMessage(text);
    return { success: true, message: 'OK', data: res };
  }
}
