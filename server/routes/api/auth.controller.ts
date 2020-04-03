import {
  Controller,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  Request,
  Response,
} from 'express';
import { LoginGuard } from '../../logics/auth/guards';

@Controller('api/auth')
export class ApiAuthController {
  @Post('login')
  @UseGuards(LoginGuard)
  public login(@Req() req: Request, @Res() res: Response) {
    res.json(req.user);
  }

  @Post('logout')
  public logout(@Req() req: Request, @Res() res: Response) {
    req.session!.destroy(() => {
      res.json(true);
    });
  }
}
