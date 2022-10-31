import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Properties } from "./properties.entity";
import User from "./user.entity";

@Entity("schedules_user_properties")
export class schedules_user_properties {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  date: string;

  @Column()
  hour: string;

  @ManyToOne((type) => Properties, {
    eager: true,
  })
  property: Properties;

  @ManyToOne((type) => User, {
    eager: true,
  })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
