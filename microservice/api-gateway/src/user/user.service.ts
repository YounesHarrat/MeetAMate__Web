import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {
  constructor(@Inject("USER_SERVICE") private readonly userService: ClientProxy) {}

  createUser(userDto: any) {
    const pattern = 'createUsers';
    const payload = userDto;
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((user: string) => ({user}))
      );
  }

  findOneUser(id: number) {
    const pattern = 'findOneUsers';
    const payload = { id: id };
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((user: string) => ({user}))
      );
  }
 
  async findAllUser() {
    const pattern = 'findAllUsers';
    const payload = {};
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((users: string) => ({users}))
      );
  }

  async updateUsers(userDto: any) {
    const pattern = 'updateUsers';
    const payload = userDto;
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((user: string) => ({user}))
      );
  }

  removeUsers(id: number) {
    const pattern = 'removeUsers';
    const payload = { id: id };
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((user: string) => ({user}))
      );
  }
}
