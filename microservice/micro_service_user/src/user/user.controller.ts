import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('createUsers')
  async create(@Payload() createUserDto: CreateUserDto):Promise<User> {
    return this.userService.create(createUserDto);
  }

  @MessagePattern('findAllUsers')
  findAll():Promise<User[]> {
    return this.userService.findAll();
  }

  // @MessagePattern('findOneUsers')
  // findOneUser(@Payload() id: number):Promise<User> {
  //   return this.userService.findOne(id);
  // }

  // @MessagePattern('updateUsers')
  // update(@Payload() updateUserDto: UpdateUserDto):Promise<User> {
  //   return this.userService.update(updateUserDto.id, updateUserDto);
  // }

  // @MessagePattern('removeUsers')
  // remove(@Payload() id: number):Promise<User> {
  //   return this.userService.remove(id);
  // }
}