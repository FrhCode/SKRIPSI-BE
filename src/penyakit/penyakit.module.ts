import { Module } from '@nestjs/common';
import { PenyakitService } from './penyakit.service';
import { PenyakitController } from './penyakit.controller';

@Module({
  controllers: [PenyakitController],
  providers: [PenyakitService]
})
export class PenyakitModule {}
