import { IsNotEmpty, IsString } from 'class-validator';

export class VaccinDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsNotEmpty()
  answers: string[];

  @IsString()
  @IsNotEmpty()
  correctAnswer: string;
}
