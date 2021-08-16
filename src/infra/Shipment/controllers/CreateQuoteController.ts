import { CreateQuoteDTO } from "@domain/Shipment/data/IShipmentData";
import ShipmentEntity from "@domain/Shipment/entity/ShipmentEntity";
import CreateQuoteFactoryFake from "../../../../tests/Shipment/factory/CreateQuoteFactoryFake";

export default class CreateQuoteController {
  public async handle(data: CreateQuoteDTO): Promise<ShipmentEntity> {
    const createQuoteFactory = new CreateQuoteFactoryFake();
    return createQuoteFactory.execute(data);
  }
}