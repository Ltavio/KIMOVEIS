import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Properties } from "./properties.entity";

@Entity("categories")
export class Categories {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  name: string;

  @OneToMany((type) => Properties, (properties) => properties.category)
  properties: Properties[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
