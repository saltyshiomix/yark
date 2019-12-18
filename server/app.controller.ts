import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  public showIndexPage() {
    return {
      message: 'Hello World',
    };
  }
}
