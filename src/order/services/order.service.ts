import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../../database/entities/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';
import { Status } from '../../cart/models';
//import { v4 } from 'uuid';

//import { Order } from '../models';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>
  ) {}

  /*findById(orderId: string): Order {
    return this.orders[ orderId ];
  }*/

  async findByUserId(userId: string): Promise<Order> {
    return this.orderRepo.findOne({ where: { userId: userId } });
  }

  async createOrder(createOrderDto: CreateOrderDto) {
    let res;
    try {
      res = await this.orderRepo.insert({ ...createOrderDto, total: 10, status: Status.OPEN });
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

  async updateOrder(id: string, createOrderDto: CreateOrderDto) {
    try {
      await this.orderRepo.update({ id }, { ...createOrderDto, total: 15 });
    } catch (e) {
      return false;
    }
    return true;
  }

  /*create(data: any) {
    const id = v4(v4())
    const order = {
      ...data,
      id,
      status: 'inProgress',
    };

    this.orders[ id ] = order;

    return order;
  }

  update(orderId, data) {
    const order = this.findById(orderId);

    if (!order) {
      throw new Error('Order does not exist.');
    }

    this.orders[ orderId ] = {
      ...data,
      id: orderId,
    }
  }*/
}
