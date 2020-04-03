import {
  Controller,
  Render,
  Get,
} from '@nestjs/common';

@Controller()
export class AuthController {
  @Get('login')
  @Render('auth/login')
  public showLogin() {}
}
