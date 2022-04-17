import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/createQuestion.input';
import { Question, QuestionDocument } from './model/question.model';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name)
    private readonly questionModel: Model<QuestionDocument>,
  ) {}

  async getAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }

  async createQuestion( createQuestionDto: CreateQuestionDto): Promise<Question | object> {
    const question = await this.questionModel.create(createQuestionDto);
    return question;
  }

  async deleteQuestion(id: string): Promise<Question | object> {
    const question = await this.questionModel.findByIdAndDelete(id);
    return question;
  }

}