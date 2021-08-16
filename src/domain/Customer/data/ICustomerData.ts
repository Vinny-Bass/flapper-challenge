import CustomerEntity from "../entity/CustomerEntity";

export type GetCustomerDTO = {
  email: string;
}

export type CreateCustomerDTO = {
  email: string;
  name: string;
  phone: string;
}

export default interface ICustomerData {
  createCustomer(data: CreateCustomerDTO): Promise<CustomerEntity>
  findByEmail(email: string): Promise<CustomerEntity | undefined>
}