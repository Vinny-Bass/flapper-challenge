import IShipmentData from "@domain/Shipment/data/IShipmentData";
import ShipmentEntity from "@domain/Shipment/entity/ShipmentEntity";
import { CreateQuoteDTO } from "@domain/Shipment/data/IShipmentData";

export default class FakeQuotesRepository implements IShipmentData {
  private quotes: ShipmentEntity[] = [];

  private calculateCubedWeight(data: CreateQuoteDTO['shipment']): number {
    const cubageFactor = (parseInt(process.env.CUBAGE_FACTOR || "") || 6000);
    return (data.height * data.length * data.width) / cubageFactor;
  }

  public async createQuote(data: CreateQuoteDTO): Promise<ShipmentEntity> {
    const newQuote = {
      id: 1,
      cubedWeight: this.calculateCubedWeight(data.shipment),
      customerID: 1,
      ...data.shipment,
      ...data.transport
    }
    this.quotes.push(newQuote);
    return newQuote;
  }
}