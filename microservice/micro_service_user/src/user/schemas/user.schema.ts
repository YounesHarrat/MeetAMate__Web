import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  
  @Prop()
  nom:string;
  @Prop()
  prenom:string;
  @Prop()
  dateNaissance:Date;
  @Prop()
  mail:string;    
  @Prop()
  pseudo:string;
  @Prop()
  avatar:string;
  @Prop()
  sub:string;
}

export const UserSchema = SchemaFactory.createForClass(User);