import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService, CartItemsService } from './services';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [ DatabaseModule ],
  providers: [ CartService, CartItemsService ],
  controllers: [ CartController ]
})
export class CartModule {}
