import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema({ timestamps: true })
export class Question {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  answers: string[];

  @Prop({ required: true })
  correctAnswer: string;

}

export const QuestionSchema = SchemaFactory.createForClass(Question);