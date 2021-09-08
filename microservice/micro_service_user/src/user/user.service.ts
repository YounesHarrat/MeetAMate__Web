import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectConnection() private readonly connection: Connection
  ){}

  async create(createUserDto: CreateUserDto):Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll():Promise<User[]> {
    return this.userModel.find().exec();
  }

  // async findOne(id: number) {
  //   return this.userModel.findOne(id).catch(err=>{
  //     throw new HttpException(err,HttpStatus.BAD_REQUEST);
  //   });
  // }

  // async update(id: number, updateUserDto: UpdateUserDto) {
  //   let user: User = await this.userModel.findOne(id).catch(err=>{
  //     throw new HttpException(err,HttpStatus.BAD_REQUEST)
  //   });
  //   if(user){
  //     return await this.userModel.save(user).catch(err=>{
  //       throw new HttpException(err,HttpStatus.BAD_REQUEST)
  //     });
  //   }else{
  //     throw new HttpException("User not found",HttpStatus.NOT_FOUND)
  //   }
  // }

  // async remove(id: number):Promise<User> {
  //   let user: User = await this.userModel.findOne(id).catch(err=>{
  //     throw new HttpException(err,HttpStatus.BAD_REQUEST)
  //   });
  //   let b = await this.userModel.delete(id).catch(err=>{
  //     throw new HttpException(err,HttpStatus.BAD_REQUEST)
  //   });
  //   if(b.affected){
  //     return user;
  //   }else{
  //     throw new HttpException("User not deleted",HttpStatus.BAD_REQUEST)
  //   }
  // }
}
