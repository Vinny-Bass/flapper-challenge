import IUseCase from "@core/IUseCase";
import IShipmentData, { ListQuotesByCustomerIDDTO } from "../data/IShipmentData";
import ShipmentEntity from "../entity/ShipmentEntity";

export abstract class ListQuotesByCustomerIDUseCase implements IUseCase<ListQuotesByCustomerIDDTO, ShipmentEntity[]> {
  constructor(
    private readonly shipmentProvider: IShipmentData
  ) {}

  public async execute(data: ListQuotesByCustomerIDDTO): Promise<ShipmentEntity[]> {
    return this.shipmentProvider.listQuotesByCustomerID(data);
  }
}