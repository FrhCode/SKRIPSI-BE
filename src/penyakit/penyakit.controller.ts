import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenyakitService } from './penyakit.service';
import { CreatePenyakitDto } from './dto/create-penyakit.dto';
import { UpdatePenyakitDto } from './dto/update-penyakit.dto';

@Controller('penyakit')
export class PenyakitController {
  constructor(private readonly penyakitService: PenyakitService) {}

  @Post()
  create(@Body() createPenyakitDto: CreatePenyakitDto) {
    return this.penyakitService.create(createPenyakitDto);
  }

  @Get()
  findAll() {
    return this.penyakitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penyakitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePenyakitDto: UpdatePenyakitDto) {
    return this.penyakitService.update(+id, updatePenyakitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penyakitService.remove(+id);
  }
}
