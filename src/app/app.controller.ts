import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  SerializeOptions,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

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

  @SerializeOptions({
    groups: ['admin'],
  })
  @Get('detailedStatus')
  @HttpCode(HttpStatus.OK)
  public detailedStatus(): ConfigService {
    return this.service.detailedStatus();
  }
}
