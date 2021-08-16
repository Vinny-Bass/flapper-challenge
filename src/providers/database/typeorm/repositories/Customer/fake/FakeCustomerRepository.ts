import ICustomerData, { CreateCustomerDTO } from "@domain/Customer/data/ICustomerData";
import CustomerEntity from "@domain/Customer/entity/CustomerEntity";

export default class FakeCustomerRepository implements ICustomerData {
  private customers: CustomerEntity[] = [
    {
      id: 1,
      email: 'teste@teste.com',
      name: 'Teste',
      phone: '11 40028922',
      createdAt: new Date()
    },
    {
      id: 2,
      email: 'teste-1@teste.com',
      name: 'Teste 1',
      phone: '11 40028922',
      createdAt: new Date()
    }
  ]

  public async findByEmail(email: string): Promise<CustomerEntity | undefined> {
    return this.customers.find(customer => customer.email === email);
  }

  public async createCustomer(data: CreateCustomerDTO): Promise<CustomerEntity> {
    const newCustomer = {
      id: 3,
      email: data.email,
      name: data.name,
      phone: data.phone,
      createdAt: new Date()
    }

    this.customers.push(newCustomer);
    return newCustomer;
  }
}