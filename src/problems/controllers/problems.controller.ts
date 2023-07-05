import { Controller, Get } from '@nestjs/common';

@Controller('problems')
export class ProblemsController {
  @Get()
  getProblems() {
    return 'Problems';
  }
}
