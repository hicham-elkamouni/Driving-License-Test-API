import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  answers: string[];

  @IsString()
  @IsNotEmpty()
  correctAnswer: string;
}
