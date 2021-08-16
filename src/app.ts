import express from 'express';
import '@providers/database/typeorm/connection';
import { json } from 'body-parser';
import { errors } from 'celebrate';
import cors from 'cors';
import routes from '@infra/shared/routes';
import ApplicationError from '@infra/shared/middlewares/AplicationError';

const app = express();

app.use(json());
app.use(cors());
app.use(routes);
app.use(errors());
app.use(ApplicationError);

export default app;