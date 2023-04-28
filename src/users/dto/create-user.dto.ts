import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.mail',
  })
  email: string;

  @ApiProperty({
    default: 'password',
  })
  password: string;

  @ApiProperty({
    default: 'John Snoy',
  })
  fullName: string;
}
