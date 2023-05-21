import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItems } from '../../database/entities/cart-items.entity';
import { CreateCartItemDto } from '../dto/create-cart-item.dto';

@Injectable()
export class CartItemsService {
  constructor(
    @InjectRepository(CartItems)
    private cartItemsRepo: Repository<CartItems>
  ) {}
  
  async createCartItem(createCartItemDto: CreateCartItemDto) {
    let res;
    try {
      res = await this.cartItemsRepo.insert(createCartItemDto);
    } catch (e) {
      return false;
    }
    return res.identifiers;
  }

  async deleteCartItem(id: string) {
    try {
      await this.cartItemsRepo.delete({ id });
    } catch (e) {
      return false;
    }
    return true;
  }

  async updateCartItem(id: string, createCartItemDto: CreateCartItemDto) {
    try {
      await this.cartItemsRepo.update({ id }, createCartItemDto);
    } catch (e) {
      return false;
    }
    return true;
  }

}
