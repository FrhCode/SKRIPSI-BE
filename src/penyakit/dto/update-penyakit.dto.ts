import { PartialType } from '@nestjs/mapped-types';
import { CreatePenyakitDto } from './create-penyakit.dto';

export class UpdatePenyakitDto extends PartialType(CreatePenyakitDto) {}
