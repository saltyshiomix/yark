import {
  Controller,
  Render,
  Get,
} from '@nestjs/common';

@Controller()
export class HomeController {
  @Get()
  @Render('index')
  public showHome() {
    return {
      message: 'You are now logged in!',
    };
  }
}
