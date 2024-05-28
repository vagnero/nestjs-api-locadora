import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  providers: [MovieService],
  controllers: [MovieController]
})
export class MovieModule {}
