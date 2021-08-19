import IShipmentData, { ListQuotesByCustomerIDDTO, ListQuotesDTO } from "@domain/Shipment/data/IShipmentData";
import ShipmentEntity from "@domain/Shipment/entity/ShipmentEntity";
import { CreateQuoteDTO } from "@domain/Shipment/data/IShipmentData";

export default class FakeQuotesRepository implements IShipmentData {
  private quotes: ShipmentEntity[] = [
    {
      id: 1,
      customerID: 1,
      height: 20,
      length: 30,
      weight: 40,
      width: 20,
      cubedWeight: 1.40,
      destinyCity: 'SP',
      originCity: 'RJ'
    }
  ];

  public async createQuote(data: CreateQuoteDTO): Promise<ShipmentEntity> {
    const newQuote = {
      id: 1,
      customerID: data.customer.customerID || 1,
      cubedWeight: data.shipment.cubedWeight || 10,
      ...data.shipment,
      ...data.transport
    }
    this.quotes.push(newQuote);
    return newQuote;
  }

  public async listQuotes(_data: ListQuotesDTO): Promise<ShipmentEntity[]> {
    return this.quotes;
  }

  public async listQuotesByCustomerID(data: ListQuotesByCustomerIDDTO): Promise<ShipmentEntity[]> {
    return this.quotes.filter(quote => quote.customerID === data.customerID);
  }
}