import { PartialType } from '@nestjs/mapped-types';
import { CreateGejalaDto } from './create-gejala.dto';

export class UpdateGejalaDto extends PartialType(CreateGejalaDto) {}
