import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginCredentialDto {
  @ApiProperty({
    required: true,
    description: 'Username or Email of user',
  })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    required: true,
    description: 'Password of user',
  })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
