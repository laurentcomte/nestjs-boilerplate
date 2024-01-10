import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  SerializeOptions,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/roles/roles.decorator';
import { RoleEnum } from 'src/roles/roles.enum';
import { RolesGuard } from 'src/roles/roles.guard';

@ApiTags('App')
@Controller({
  path: 'app',
  version: '1',
})
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get('status')
  @HttpCode(HttpStatus.OK)
  public status(): string {
    return this.service.status();
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get('config')
  @HttpCode(HttpStatus.OK)
  public config(): ConfigService {
    return this.service.config();
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get('env')
  @HttpCode(HttpStatus.OK)
  public env(): NodeJS.ProcessEnv {
    return process.env;
  }
}
