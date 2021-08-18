import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import CreateQuoteController from "../controllers/CreateQuoteController";
import { ensureAuthenticated, authRequestValidation } from "@infra/shared/middlewares/Authentication";

const shipmentRouter = Router();
const createQuoteController = new CreateQuoteController();

shipmentRouter.post(
  '/create',
  authRequestValidation,
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: Joi.object().required().keys({
      customer: Joi.object().keys({
        name: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().required()
      }),
      shipment: Joi.object().required().keys({
        weight: Joi.number().required(),
        height: Joi.number().required(),
        width: Joi.number().required(),
        length: Joi.number().required(),
      }),
      transport: Joi.object().required().keys({
        originCity: Joi.string().required(),
        destinyCity: Joi.string().required()
      })
    })
  }),
  createQuoteController.handle
);

export default shipmentRouter;