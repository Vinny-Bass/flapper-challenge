import ICustomerData, { CreateCustomerDTO } from "@domain/Customer/data/ICustomerData";
import CustomerEntity from "@domain/Customer/entity/CustomerEntity";
import { getRepository, Repository } from "typeorm";
import CustomerModel from "../../models/Customer/CustomerModel";

export default class CustomerRepository implements ICustomerData {
  private repository: Repository<CustomerModel>;

  constructor() {
    this.repository = getRepository(CustomerModel);
  }

  public async findByEmail(email: string): Promise<CustomerEntity | undefined> {
    return this.repository.findOne({
      where: {
        email: email
      }
    });
  }

  public async createCustomer(data: CreateCustomerDTO): Promise<CustomerEntity> {
    return this.repository.create(data);
  }
}