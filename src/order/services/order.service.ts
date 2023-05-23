import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../../database/entities/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>
  ) {}

  async findByUserId(userId: string): Promise<Order> {
    return this.orderRepo.findOne({ where: { userId: userId } });
  }

  async findById(id: string): Promise<Order> {
    return this.orderRepo.findOne({ where: { id } });
  }

  async createOrder(createOrderDto: CreateOrderDto) {
    let res;
    try {
      res = await this.orderRepo.insert(createOrderDto);
    } catch (e) {
      return false;
    }
    return res.identifiers;
  }

  async deleteOrder(id: string) {
    let res;
    try {
      res = await this.orderRepo.delete({ id });
    } catch (e) {
      return false;
    }
    return true;
  }

  async updateOrder(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      await this.orderRepo.update({ id }, updateOrderDto);
    } catch (e) {
      return false;
    }
    return true;
  }
}
