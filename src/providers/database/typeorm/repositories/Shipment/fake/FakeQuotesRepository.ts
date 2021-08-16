import IShipmentData from "@domain/Shipment/data/IShipmentData";
import ShipmentEntity from "@domain/Shipment/entity/ShipmentEntity";
import { CreateQuoteDTO } from "@domain/Shipment/data/IShipmentData";

export default class FakeQuotesRepository implements IShipmentData {
  private quotes: ShipmentEntity[] = [];

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
}