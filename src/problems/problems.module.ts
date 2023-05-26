import { Module } from '@nestjs/common';
import { ProblemsController } from './controllers/problems/problems.controller';

@Module({
  controllers: [ProblemsController],
})
export class ProblemsModule {}
