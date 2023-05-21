import { Controller, Get, Delete, Put, Body, Req, Post, UseGuards, HttpStatus, Query, Param } from '@nestjs/common';
import { CartService, CartItemsService } from './services';

@Controller('carts')
export class CartController {
  constructor(
    private cartService: CartService,
    private cartItemsService: CartItemsService,
  ) { }

  @Get()
  findUserCart(@Query() { userId }) {
    return this.cartService.findByUserId(userId);
  }

  @Post()
  createCart(@Body() body) {
    return this.cartService.createCart(body);
  }

  @Delete(':id')
  deleteCart(@Param('id') id: string) {
    return this.cartService.deleteCart(id);
  }

  @Post('cart-items')
  createCartItem(@Body() body) {
    return this.cartItemsService.createCartItem(body);
  }

  @Delete('cart-items/:id')
  deleteCartItem(@Param('id') id: string) {
    return this.cartItemsService.deleteCartItem(id);
  }

  @Put('cart-items/:id')
  updateCartItem(@Param('id') id: string, @Body() body) {
    return this.cartItemsService.updateCartItem(id, body);
  }
}
