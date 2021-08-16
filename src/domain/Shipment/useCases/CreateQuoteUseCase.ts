import IUseCase from "@core/IUseCase";
import ICustomerData from "@domain/Customer/data/ICustomerData";
import IShipmentData, { CreateQuoteDTO } from "../data/IShipmentData";
import ShipmentEntity from "../entity/ShipmentEntity";

export default abstract class CreateQuoteUseCase implements IUseCase<CreateQuoteDTO, ShipmentEntity> {
  constructor(
    private readonly shipmentProvider: IShipmentData,
    private readonly customerProvider: ICustomerData
  ) {}

  private calculateCubedWeight(data: CreateQuoteDTO['shipment']): number {
    const cubageFactor = (parseInt(process.env.CUBAGE_FACTOR || "") || 6000);
    return (data.height * data.length * data.width) / cubageFactor;
  }

  public async execute(data: CreateQuoteDTO): Promise<ShipmentEntity> {
    let customer = await this.customerProvider.findByEmail(data.customer.email);

    if(customer === undefined) {
      customer = await this.customerProvider.createCustomer(data.customer);
    }

    data.customer.customerID = customer.id;
    data.shipment.cubedWeight = this.calculateCubedWeight(data.shipment);

    return this.shipmentProvider.createQuote(data);
  }
}