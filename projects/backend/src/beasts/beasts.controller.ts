import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BeastsService } from './beasts.service';

@ApiTags('Beasts')
@Controller('/beasts')
export class BeastsController {
  constructor(private beastsService: BeastsService) {}
}
