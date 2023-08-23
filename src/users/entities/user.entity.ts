import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 200, unique: true, nullable: false })
  email: string;

  @Column({ length: 200, nullable: false })
  password: string;

  @Column({ length: 200, default: 'user' })
  role: string;

  @DeleteDateColumn()
  deleted_at: Date;
}
