import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItems } from '../../database/entities/cart-items.entity';
import { CreateCartItemDto } from '../dto/create-cart-item.dto';
import { UpdateCartItemDto } from '../dto/update-cart-item.dto';

@Injectable()
export class CartItemsService {
  constructor(
    @InjectRepository(CartItems)
    private cartItemsRepo: Repository<CartItems>
  ) {}
  
  async findCartItemById(id: string) {
    return this.cartItemsRepo.findOne({ where: { id } });
  }

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

  async updateCartItem(id: string, updateCartItemDto: UpdateCartItemDto) {
    try {
      await this.cartItemsRepo.update({ id }, updateCartItemDto);
    } catch (e) {
      return false;
    }
    return true;
  }

}
