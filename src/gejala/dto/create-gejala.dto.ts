import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class CreateGejalaDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^KG\d{2}$/)
  kode_Gejala: string;

  @IsString()
  @IsNotEmpty()
  nama_Gejala: string;

  @Min(0)
  @Max(1)
  @IsNumber()
  @Type(() => Number)
  nilai_ds: number;
}
