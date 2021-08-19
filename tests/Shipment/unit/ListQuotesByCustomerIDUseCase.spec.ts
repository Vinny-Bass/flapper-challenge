import ListQuotesByCustomerIDFactoryFake from "../factory/ListQuotesByCustomerIDFactoryFake";

let listQuotesByCustomerIDUseCase: ListQuotesByCustomerIDFactoryFake;

describe('List quotes by customer ID - unit test', () => {
  beforeEach(() => {
    listQuotesByCustomerIDUseCase = new ListQuotesByCustomerIDFactoryFake()
  });

  it('Should list correct quotes for some id', async () => {
    const response = await listQuotesByCustomerIDUseCase.execute({
      customerID: 1,
      limit: 10,
      offset: 0
    });

    expect(response.length).toBe(1);
  })
})