import { Controller, Get, Delete, Put, Body, Req, Post, UseGuards, HttpStatus, Query, Param } from '@nestjs/common';
import { UserService } from './services';

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService
  ) { }

  @Get()
  findByName(@Query() { userName }) {
    return this.userService.findByName(userName);
  }

  @Post()
  createUser(@Body() body) {
    return this.userService.createUser(body);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() body) {
    return this.userService.updateUser(id, body);
  }
}
