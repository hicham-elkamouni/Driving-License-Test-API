import { IsNotEmpty, IsString } from 'class-validator';

export class VaccinDto {
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsString()
  @IsNotEmpty()
  answers?: string[];

  @IsString()
  @IsNotEmpty()
  correctAnswer?: string;
}