export default abstract class ShipmentEntity {
  id: number;
  customerID: number;
  originCity: string;
  destinyCity: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  cubedWeight: number;
}