import ListQuotesFactoryFake from "../factory/ListQuotesFactoryFake";

let listQuotesUseCase: ListQuotesFactoryFake;

describe('List quotes by customer ID - unit test', () => {
  beforeEach(() => {
    listQuotesUseCase = new ListQuotesFactoryFake()
  });

  it('Should list correct quotes for some id', async () => {
    const response = await listQuotesUseCase.execute({
      limit: 10,
      offset: 0
    });

    expect(response.length).toBe(1);
  })
})