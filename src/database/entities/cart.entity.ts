import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CartItems } from './cart-items.entity';
import { Status } from '../../cart/models';

@Entity({ name: 'carts' })
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false})
  userId: string;

  @Column({ type: 'date', nullable: false})
  createdAt: Date;

  @Column({ type: 'date', nullable: false})
  updatedAt: Date;

  @Column({ type: 'enum', enum: Status, default: Status.OPEN })
  status: Status;

  @OneToMany(() => CartItems, (cartItem) => cartItem.id)
  items: CartItems[]
}