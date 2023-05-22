import { ApiProperty } from '@nestjs/swagger';
import { Status } from '../../cart/models';

export class CreateOrderDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  cartId: string;

  @ApiProperty()
  payment: any;

  @ApiProperty()
  delivery: any;

  @ApiProperty()
  comments: string;

  @ApiProperty()
  total: number;

  @ApiProperty()
  status: Status;
}
