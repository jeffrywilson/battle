import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    description: 'Email address of User',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
    description: 'Username of user',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    required: true,
    description: 'Password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
