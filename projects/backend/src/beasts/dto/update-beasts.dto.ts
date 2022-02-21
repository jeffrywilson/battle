import { PartialType } from '@nestjs/swagger';
import { CreateBeastsDto } from './create-beasts.dto';

export class UpdateBeastsDto extends PartialType(CreateBeastsDto) {}
