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

export type ListQuotesDTO = {
  offset: number;
  limit: number;
}

export type ListQuotesByCustomerIDDTO = {
  customerID: number;
  offset: number;
  limit: number;
}
export default interface IShipmentData {
  createQuote(data: CreateQuoteDTO): Promise<ShipmentEntity>;
  listQuotes(data: ListQuotesDTO): Promise<ShipmentEntity[]>;
  listQuotesByCustomerID(data: ListQuotesByCustomerIDDTO): Promise<ShipmentEntity[]>;
}