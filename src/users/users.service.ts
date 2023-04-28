import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string) {
    return await this.repository.findOneBy({
      email,
    });
  }

  async findById(id: number) {
    return await this.repository.findOneBy({
      id,
    });
  }

  async create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }
}
