import { CreateQuoteDTO } from "@domain/Shipment/data/IShipmentData";
import CreateQuoteFactoryFake from "../factory/CreateQuoteFactoryFake";

let createQuoteUseCase: CreateQuoteFactoryFake;

describe('Create Quote - unit test', () => {
  beforeEach(() => {
    createQuoteUseCase = new CreateQuoteFactoryFake();
  });

  it('Should have a valid cubed weight calc', async () => {
    const data: CreateQuoteDTO = {
      customer: {
        email: 'teste@teste.com',
        name: 'Teste',
        phone: '44028922'
      },
      shipment: {
        height: 20,
        weight: 30,
        length: 50,
        width: 25
      },
      transport: {
        originCity: 'São Paulo',
        destinyCity: 'São Paulo'
      }
    }

    const shipment = await createQuoteUseCase.execute(data);
    expect(shipment.customerID).toBe(1);
    expect(shipment.cubedWeight).toBe(4.17);
  });

  it('Should create a new customer for make an quotation', async () => {
    const data: CreateQuoteDTO = {
      customer: {
        email: 'teste-aaaaa@teste.com',
        name: 'Teste',
        phone: '44028922'
      },
      shipment: {
        height: 20,
        weight: 30,
        length: 50,
        width: 25
      },
      transport: {
        originCity: 'São Paulo',
        destinyCity: 'São Paulo'
      }
    }

    const shipment = await createQuoteUseCase.execute(data);
    expect(shipment.customerID).toBe(3);
    expect(shipment.cubedWeight).toBe(4.17);
  });
})