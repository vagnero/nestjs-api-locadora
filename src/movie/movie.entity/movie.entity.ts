import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from 'src/user/user.entity/user.entity';
import { Genre } from 'src/genre/genre.entity/genre.entity';
@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  director: string;

  @Column('int')
  releaseYear: number;

  @ManyToOne(() => User, user => user.movies)
  user: User;

  @ManyToMany(() => Genre, genre => genre.movies)
  @JoinTable()
  genres: Genre[];
}