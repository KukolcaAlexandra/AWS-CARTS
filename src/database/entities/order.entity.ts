import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Status } from '../../cart/models';
import { Cart } from './cart.entity';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false})
  userId: string;

  @ManyToOne(() => Cart, (cart) => cart.id)
  @JoinColumn({ name: 'cart_id', referencedColumnName: 'id'})
  cartId: string;

  @Column({ type: 'json'})
  payment: any;

  @Column({ type: 'json'})
  delivery: any;

  @Column({ type: 'text'})
  comments: string;

  @Column({ type: 'integer'})
  total: number;

  @Column({ type: 'enum', enum: Status, default: Status.OPEN })
  status: Status;
}
