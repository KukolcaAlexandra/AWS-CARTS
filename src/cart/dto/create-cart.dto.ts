import { ApiProperty } from '@nestjs/swagger';
import { Status } from '../models';

export class CreateCartDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  status: Status;
}
