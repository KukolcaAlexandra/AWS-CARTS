import { Controller, Get, Delete, Put, Body, Req, Post, UseGuards, HttpStatus, Query, Param } from '@nestjs/common';
import { OrderService } from './services';

@Controller('orders')
export class OrderController {
  constructor(
    private orderService: OrderService
  ) { }

  @Get()
  findUserOrder(@Query() { userId }) {
    return this.orderService.findByUserId(userId);
  }

  @Post()
  createOrder(@Body() body) {
    return this.orderService.createOrder(body);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.orderService.deleteOrder(id);
  }

  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() body) {
    return this.orderService.updateOrder(id, body);
  }
}
