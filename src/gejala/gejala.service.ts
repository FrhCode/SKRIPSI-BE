import {
  ConflictException,
  HttpCode,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateGejalaDto } from './dto/create-gejala.dto';
import { UpdateGejalaDto } from './dto/update-gejala.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class GejalaService {
  constructor(private prisma: PrismaService) {}

  async create(createGejalaDto: CreateGejalaDto) {
    const { kode_Gejala, nama_Gejala, nilai_ds } = createGejalaDto;

    return await this.prisma.gejala.create({
      data: { kode_Gejala, nama_Gejala, nilai_ds },
    });
  }

  async findAll() {
    return this.prisma.gejala.findMany({ orderBy: { kode_Gejala: 'asc' } });
  }

  async findOne(code: string) {
    const gejala = await this.prisma.gejala.findUnique({
      where: { kode_Gejala: code },
    });

    if (!gejala) throw new NotFoundException();

    return gejala;
  }

  async update(code: string, updateGejalaDto: UpdateGejalaDto) {
    const { kode_Gejala, nama_Gejala, nilai_ds } = updateGejalaDto;

    try {
      //
      return await this.prisma.gejala.update({
        where: { kode_Gejala: code },
        data: { kode_Gejala, nama_Gejala, nilai_ds },
      });
      //
    } catch (error) {
      //
      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) {
        throw new NotFoundException();
      }

      if (error.code === 'P2002') {
        throw new ConflictException();
      }

      throw new NotFoundException();
    }
    //
  }

  async remove(code: string) {
    try {
      const gejala = await this.prisma.gejala.delete({
        where: { kode_Gejala: code },
      });

      return gejala;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
