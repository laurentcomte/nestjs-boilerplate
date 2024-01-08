import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  status(): 'OK' {
    this.detailedStatus();
    return 'OK';
  }

  detailedStatus(): ConfigService {
    return this.configService;
  }
}
