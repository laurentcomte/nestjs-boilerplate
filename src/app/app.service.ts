import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  status(): 'OK' {
    this.config();
    return 'OK';
  }

  config(): ConfigService {
    return this.configService;
  }
}
