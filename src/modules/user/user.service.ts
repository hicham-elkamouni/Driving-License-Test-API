import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInputDto } from './dto/user.input';
import { User, UserDocument } from './model/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async createUser( userInputDto: UserInputDto): Promise<User | object> {
    const user = await this.userModel.create(userInputDto);
    return user;
  }

}