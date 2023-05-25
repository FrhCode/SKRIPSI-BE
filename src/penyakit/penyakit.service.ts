import { Injectable } from '@nestjs/common';
import { CreatePenyakitDto } from './dto/create-penyakit.dto';
import { UpdatePenyakitDto } from './dto/update-penyakit.dto';

@Injectable()
export class PenyakitService {
  create(createPenyakitDto: CreatePenyakitDto) {
    return 'This action adds a new penyakit';
  }

  findAll() {
    return `This action returns all penyakit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} penyakit`;
  }

  update(id: number, updatePenyakitDto: UpdatePenyakitDto) {
    return `This action updates a #${id} penyakit`;
  }

  remove(id: number) {
    return `This action removes a #${id} penyakit`;
  }
}
