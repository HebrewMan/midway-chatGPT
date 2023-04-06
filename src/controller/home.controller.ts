import { Controller, Get } from '@midwayjs/core';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return `Hello chatGPT! ${process.env.OPENAI_API_KEY}`;
  }
}
