import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../../database/entities/cart.entity';
import { CreateCartDto } from '../dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepo: Repository<Cart>
  ) {}

  async findByUserId(userId: string): Promise<Cart> {
    return this.cartRepo.findOne({ where: { userId: userId } });
  }

  async createCart(createCartDto: CreateCartDto) {
    let res;
    try {
      res = await this.cartRepo.insert(createCartDto);
    } catch (e) {
      return false;
    }
    return res.identifiers;
  }

  async deleteCart(cartId: string) {
    try {
      await this.cartRepo.delete({ id: cartId });
    } catch (e) {
      return false;
    }
    return true;
  }

}
