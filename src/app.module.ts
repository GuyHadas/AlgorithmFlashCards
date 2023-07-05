import { Module } from '@nestjs/common';
import { ProblemsModule } from './problems/problems.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProblemsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
