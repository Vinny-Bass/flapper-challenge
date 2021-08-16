import CreateQuoteFactoryFake from "../factory/CreateQuoteFactoryFake";

let createQuoteUseCase: CreateQuoteFactoryFake;

describe('Create Quote - unit test', () => {
  beforeEach(() => {
    createQuoteUseCase = new CreateQuoteFactoryFake();
  });

  it('Should not create quote without an valid customer ID', async () => {
    // write test
  });

  it('Should have a valid cubed weight calc', async () => {
    // write test
  });
})