import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { BoardStatus } from './boards.status-enum';
import { User } from '../auth/user.entity';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  user: User;
}
