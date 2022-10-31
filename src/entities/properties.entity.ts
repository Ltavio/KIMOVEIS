import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { schedules_user_properties } from "./schedules_user_properties.entity";

@Entity("properties")
export class Properties {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean = false;

  @Column("decimal")
  value: number;

  @Column("integer")
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne((type) => Addresses, {
    eager: true,
  })
  @JoinColumn()
  addresses: Addresses;

  @ManyToOne((type) => Categories, {
    eager: true,
  })
  category: Categories;

  @OneToMany(
    (type) => schedules_user_properties,
    (schedules_user_properties) => schedules_user_properties.property
  )
  schedules: schedules_user_properties[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
