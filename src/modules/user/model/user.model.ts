import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  fullName: string;

  @Prop({ required: true, unique: true})
  cin: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  totalScore: number;

}

export const UserSchema = SchemaFactory.createForClass(User);