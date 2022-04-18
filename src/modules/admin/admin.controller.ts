import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly userService: UserService) {}

  
  @Get('get')
  async getAll() {
    try {
      return await this.userService.getAll();
    } catch (error) {
      return { error: error.message };
    }
  }

}
