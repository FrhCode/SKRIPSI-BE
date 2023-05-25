import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ConflictException,
} from '@nestjs/common';
import { GejalaService } from './gejala.service';
import { CreateGejalaDto } from './dto/create-gejala.dto';
import { UpdateGejalaDto } from './dto/update-gejala.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('gejala')
export class GejalaController {
  constructor(
    private readonly gejalaService: GejalaService,
    private prisma: PrismaService,
  ) {}

  @Post()
  async create(@Body() createGejalaDto: CreateGejalaDto) {
    const { kode_Gejala } = createGejalaDto;

    const gejala = await this.prisma.gejala.findUnique({
      where: { kode_Gejala },
    });

    if (gejala) throw new ConflictException();

    return this.gejalaService.create(createGejalaDto);
  }

  @Get()
  findAll() {
    return this.gejalaService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.gejalaService.findOne(code);
  }

  @Patch(':code')
  update(
    @Param('code') code: string,
    @Body() updateGejalaDto: UpdateGejalaDto,
  ) {
    return this.gejalaService.update(code, updateGejalaDto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.gejalaService.remove(code);
  }
}
