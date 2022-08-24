import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface Movie {
  id: number;
  name: string;
  year: number;
}

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getENV() {
    const env = this.configService.get('NODE_ENV');
    const port = this.configService.get('PORT');
    return { env, port };
  }
}
