import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import CreateQuoteController from "../controllers/CreateQuoteController";
import { ensureAuthenticated, authRequestValidation } from "@infra/shared/middlewares/Authentication";
import ListQuotesController from "../controllers/ListQuotesController";
import ListQuotesByCustomerIDController from "../controllers/ListQuotesByCustomerIDController";

const shipmentRouter = Router();
const createQuoteController = new CreateQuoteController();
const listQuotesController = new ListQuotesController();
const listQuotesByCustomerIDController = new ListQuotesByCustomerIDController()

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

shipmentRouter.get(
  '/list',
  authRequestValidation,
  ensureAuthenticated,
  celebrate({
    [Segments.QUERY]: {
      limit: Joi.number().greater(0).required(),
      offset: Joi.number().required()
    }
  }),
  listQuotesController.handle
);

shipmentRouter.get(
  '/list/:customerID',
  authRequestValidation,
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      customerID: Joi.number().required()
    },
    [Segments.QUERY]: {
      limit: Joi.number().greater(0).required(),
      offset: Joi.number().required()
    }
  }),
  listQuotesByCustomerIDController.handle
);

export default shipmentRouter;