import ShipmentEntity from "@domain/Shipment/entity/ShipmentEntity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import CustomerModel from "../Customer/CustomerModel";

@Entity('quotes')
export default class QuotesModel extends ShipmentEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  customerID: number;

  @ManyToOne(() => CustomerModel)
  @JoinColumn({ name: "customerID" })
  customer: CustomerModel;

  @Column()
  originCity: string;

  @Column()
  destinyCity: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  width: number;

  @Column()
  length: number;

  @Column()
  cubedWeight: number;
}