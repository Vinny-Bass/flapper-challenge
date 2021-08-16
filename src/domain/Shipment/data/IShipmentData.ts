import ShipmentEntity from "../entity/ShipmentEntity";

export type CreateQuoteDTO = {
  customer: {
    name: string;
    email: string;
    phone: string;
    customerID?: number;
  }
  transport: {
    originCity: string;
    destinyCity: string;
  }
  shipment: {
    weight: number;
    height: number;
    width: number;
    length: number;
    cubedWeight?: number;
  }
}

export default interface IShipmentData {
  createQuote(data: CreateQuoteDTO): Promise<ShipmentEntity>;
}