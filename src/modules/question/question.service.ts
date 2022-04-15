import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

  // async createCenter( createCenterDto: CreateCenterDto,): Promise<Center | object> {
  //   const center = await this.centerModel.create(createCenterDto);
  //   return center;
  // }

//   async findCenterByCity(
//     FindCenterDto: FindCenterDto,
//   ): Promise<Center | object> {
//     const center = await this.centerModel.find({ city: FindCenterDto.city });
//     return center;
//   }
}