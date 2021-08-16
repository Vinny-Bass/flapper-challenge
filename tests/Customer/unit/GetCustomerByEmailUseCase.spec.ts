import CreateCustomerFactoryFake from "../factory/CreateCustomerFactoryFake";
import GetCustomerByEmailFactoryFake from "../factory/GetCustomerByEmailFactoryFake";

let getCustomerByEmailUseCase: GetCustomerByEmailFactoryFake;
let createCustomerUseCase: CreateCustomerFactoryFake;

describe('Get Customer by email Use Case - unit test', () => {
  beforeEach(() => {
    getCustomerByEmailUseCase = new GetCustomerByEmailFactoryFake();
    createCustomerUseCase = new CreateCustomerFactoryFake();
  });

  it('Should find a valid email', async () => {
    const email = 'teste@teste.com';

    const response = await getCustomerByEmailUseCase.execute({ email });
    expect(response?.email).toBe(email);
  });

  it('Should not find a invalid email', async () => {
    const email = 'tesaaaaaaate@teste.com';

    const response = await getCustomerByEmailUseCase.execute({ email });
    expect(response).toBe(undefined);
  });

  it('Should create a new user when not find email', async () => {
    const data = {
      email: 'testeeee@teste.com',
      phone: '0000000039',
      name: 'Testando'
    };

    const response = await createCustomerUseCase.execute(data);
    expect(response.id).toBe(3);
  });
})