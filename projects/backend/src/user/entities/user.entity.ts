import { Exclude } from 'class-transformer';
import { IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt';
import {
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({
    type: String,
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column({
    type: String,
    unique: true,
  })
  username: string;

  @Column({
    type: String,
  })
  @Exclude()
  password: string;

  @Column({
    type: Boolean,
    default: false,
  })
  is_email_verfied: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  @Column('jsonb', { nullable: true })
  user_logs: object[];

  @Exclude()
  temp_password: string;

  @AfterLoad()
  private loadTempPassword(): void {
    this.temp_password = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      if (this.temp_password !== this.password) {
        try {
          this.password = await bcrypt.hash(this.password, 10);
        } catch (e) {
          throw new HttpException(
            'Issue while hashing password',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      }
    }
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  // toJSON(): UserInfo {
  //     return <UserInfo>classToPlain(this);
  // }
}
