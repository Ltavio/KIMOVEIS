import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

@Entity("users")
class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column()
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean = true;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default User;
