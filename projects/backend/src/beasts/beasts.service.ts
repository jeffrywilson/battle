import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBeastsDto } from './dto/create-beasts.dto';
import { Beast } from './entities/beast.entity';

@Injectable()
export class BeastsService {
  constructor(
    @InjectRepository(Beast)
    private readonly beastRepository: Repository<Beast>,
  ) {}
  create(createBeastsDto: CreateBeastsDto): boolean {
    try {
      const beast: Beast = this.beastRepository.create(createBeastsDto);
      this.beastRepository.save(beast);
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }

  async update(beast: Beast): Promise<void> {
    await this.beastRepository.save(beast);
  }

  findAll(): Promise<Beast[]> {
    return this.beastRepository.find();
  }

  findOne(id: string): Promise<Beast> {
    return this.beastRepository.findOne(id);
  }

  async findByTokenId(tokenId: string): Promise<Beast[]> {
    const beasts = await this.beastRepository.find({
      tokenId: tokenId,
    });
    return beasts;
  }

  async findByOwner(owner: string): Promise<Beast[]> {
    const beasts = await this.beastRepository.find({
      owner: owner,
    });
    return beasts;
  }

  async remove(id: number): Promise<void> {
    await this.beastRepository.delete(id);
  }
}
