import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (user && user.password === pass) {
      const { password, ...result } = user;

      return result;
    }
  }

  async register(dto: CreateUserDto) {
    try {
      const user = await this.usersService.create(dto);

      return {
        token: this.jwtService.sign({ id: user.id }),
      };
    } catch (error) {
      throw new ForbiddenException('Forbidden Error');
    }
  }

  async login(user: UserEntity) {
    return { token: this.jwtService.sign({ id: user.id }) };
  }
}
