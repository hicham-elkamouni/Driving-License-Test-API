import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/createQuestion.input';
// import { FindCenterDto } from './dto/find-center.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  
  @Get('get')
  async getAll() {
    try {
      return await this.questionService.getAll();
    } catch (error) {
      return { error: error.message };
    }
  }

  @Post('create')
  async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    try {
      return await this.questionService.createQuestion(createQuestionDto);
    } catch (error) {
      return { error: error.message };
    }
  }
}
