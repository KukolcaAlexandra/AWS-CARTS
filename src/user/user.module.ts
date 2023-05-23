import { Module } from '@nestjs/common';
import { UserService } from './services';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './user.controller';

@Module({
  imports: [ DatabaseModule ],
  providers: [ UserService ],
  controllers: [ UserController ]
})
export class UserModule {}
