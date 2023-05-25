import { Module } from '@nestjs/common';
import { GejalaService } from './gejala.service';
import { GejalaController } from './gejala.controller';

@Module({
  controllers: [GejalaController],
  providers: [GejalaService]
})
export class GejalaModule {}
