import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cart } from './cart.entity';

@Entity()
export class CartItems {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  productId: string;

  @Column({ type: 'integer', nullable: false})
  count: number;

  @ManyToOne(() => Cart, (cart) => cart.id, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'cart_id', referencedColumnName: 'id'})
  cartId: string;
}