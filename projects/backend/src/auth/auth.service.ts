import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginCredentialDto } from './dto/login-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginCredentialDto: LoginCredentialDto): Promise<AuthResponse> {
    try {
      const user = await this.usersRepository.findOne({
        where: [
          {
            username: loginCredentialDto.username,
          },
          {
            email: loginCredentialDto.username,
          },
        ],
      });

      if (!user) throw new UnauthorizedException('Invalid credentails');

      const isValid = await user.comparePassword(loginCredentialDto.password);

      if (!isValid) throw new UnauthorizedException('Invalid credentails');

      const payload: AuthPayload = { username: user.username, _id: user._id };
      const token = this.jwtService.sign(payload);
      delete user.password;
      delete user.temp_password;
      return { ...user, token };
    } catch (err) {
      throw new UnauthorizedException('Invalid credentails');
    }
  }

  async validateUser(payload: AuthPayload): Promise<UserInfo> {
    const { _id, username } = payload;
    const user = await this.usersRepository.findOne({
      where: { _id, username },
    });
    if (!user) {
      throw new UnauthorizedException(
        'You are not alowed to perform this action',
      );
    }
    return user;
  }
}
