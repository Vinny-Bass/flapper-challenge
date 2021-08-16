import GetCustomerByEmailFactoryFake from "../factory/GetCustomerByEmailFactoryFake";

let getCustomerByEmailUseCase: GetCustomerByEmailFactoryFake;

describe('Get Customer by email Use Case - unit test', () => {
  beforeEach(() => {
    getCustomerByEmailUseCase = new GetCustomerByEmailFactoryFake();
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
})