import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("addresses")
export class Addresses {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 100 })
  number: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 2 })
  state: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
