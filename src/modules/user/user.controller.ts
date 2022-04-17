import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInputDto } from './dto/user.input';
// import { FindCenterDto } from './dto/find-center.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  
  @Get('get')
  async getAll() {
    try {
      return await this.userService.getAll();
    } catch (error) {
      return { error: error.message };
    }
  }

  @Post('create')
  async createQuestion(@Body() createUserDto: UserInputDto) {
    try {
      return await this.userService.createUser(createUserDto);
    } catch (error) {
      return { error: error.message };
    }
  }
}