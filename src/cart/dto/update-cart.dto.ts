import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDto } from './create-cart.dto';

export class UpdateCustomerDto extends PartialType(CreateCartDto) {}
