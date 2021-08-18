import IUseCase from "@core/IUseCase";
import IShipmentData, { ListQuotesDTO } from "../data/IShipmentData";
import ShipmentEntity from "../entity/ShipmentEntity";

export default abstract class ListQuotesUseCase implements IUseCase<ListQuotesDTO, ShipmentEntity[]> {
  constructor(
    private readonly shipmentProvider: IShipmentData
  ){}

  public async execute(data: ListQuotesDTO): Promise<ShipmentEntity[]> {
    return this.shipmentProvider.listQuotes(data);
  }
}