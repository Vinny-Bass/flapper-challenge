import shipmentRouter from "@infra/Shipment/routes/shipment.routes";
import { Router } from "express";

const routes = Router();

routes.use('/quotes', shipmentRouter);

export default routes;