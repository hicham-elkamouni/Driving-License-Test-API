import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
// import { CreateCenterDto } from './dto/create-center.dto';
// import { FindCenterDto } from './dto/find-center.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

//   @Post('create')
//   async createCenter(@Body() createCenterDto: CreateCenterDto) {
//     try {
//       return await this.centerService.createCenter(createCenterDto);
//     } catch (error) {
//       return { error: error.message };
//     }
//   }

  @Get('getAll')
  async getAll() {
    try {
      return await this.questionService.getAll();
    } catch (error) {
      return { error: error.message };
    }
  }
}
