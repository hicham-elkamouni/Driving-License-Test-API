import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema({ timestamps: true })
export class Admin {
  @Prop({ required: true, unique: true })
  fullName: string;

  @Prop({ required: true, unique: true})
  email: string;

}

export const AdminSchema = SchemaFactory.createForClass(Admin);