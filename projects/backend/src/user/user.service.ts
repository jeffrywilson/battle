import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<GenericRespose> {
    try {
      const user: User = await this.usersRepository.create(createUserDto);
      const { _id, email } = await this.usersRepository.save(user);

      return {
        statusCode: HttpStatus.CREATED,
        user: { _id, email },
        message: 'User created',
      };
    } catch (err) {
      if (err.code === '23505') {
        return {
          statusCode: HttpStatus.CONFLICT,
          message: 'This email address or username is already being used.',
        };
      }
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Something went wrong. Please try again later.',
      };
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
