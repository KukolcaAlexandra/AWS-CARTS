import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async findByName(userName: string): Promise<User> {
    return this.userRepo.findOne({ where: { userName } });
  }

  async createUser(createUserDto: CreateUserDto) {
    let res;
    try {
      res = await this.userRepo.insert(createUserDto);
    } catch (e) {
      return false;
    }
    return res.identifiers;
  }

  async deleteUser(id: string) {
    let res;
    try {
      res = await this.userRepo.delete({ id });
    } catch (e) {
      return false;
    }
    return true;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    try {
      await this.userRepo.update({ id }, updateUserDto);
    } catch (e) {
      return false;
    }
    return true;
  }
}
