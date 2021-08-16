import CustomerEntity from '@domain/Customer/entity/CustomerEntity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import QuotesModel from '../Shipment/QuotesModel';

@Entity('customer')
export default class CustomerModel extends CustomerEntity {
  @OneToMany(() => QuotesModel, quote => quote.customer)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;
}