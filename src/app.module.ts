import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { AuthModule } from './auth/auth.module';
//import { MoviesModule } from './movies/movies.module';
import { UserModule } from './user/user.module';
import { GenreController } from './genre/genre.controller';
import { GenreService } from './genre/genre.service';
import { MovieModule } from './movie/movie.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'locadora',
      username: 'postgres',
      password: '1234',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
    UserModule,
    MovieModule,
    GenreModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}