import shipmentRouter from "@infra/Shipment/routes/shipment.routes";
import userRouter from "@infra/User/routes/user.routes";
import { Router } from "express";

const routes = Router();

routes.use('/quotes', shipmentRouter);
routes.use('/user', userRouter);

export default routes;