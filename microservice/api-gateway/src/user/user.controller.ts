import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOneUser(@Param('id') id: number) {
    return this.userService.findOneUser(id);
  }

  @Get('')
  findAllUser() {
    return this.userService.findAllUser();
  }

  @Post('')
  createUser(@Body() userDto: any) {
    return this.userService.createUser(userDto);
  }

  @Put('')
  updateUsers(@Body() userDto: any) {
    return this.userService.updateUsers(userDto);
  }

  @Delete(':id')
  removeUsers(@Param('id') id: number) {
    return this.userService.removeUsers(id);
  }
}