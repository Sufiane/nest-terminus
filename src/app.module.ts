import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { HealthController } from './healt.controller';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
