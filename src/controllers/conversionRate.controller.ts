import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import IConversionControllerInterface from '../interfaces/IConversionController.interface';
import ConversionRateRequest from '../models/ConversionRateRequest';
import RedisQueue from '../services/RedisQueue';
import ConversionRateResponse from '../models/ConversionRateResponse';

class ConversionRatehController implements IControllerBase, IConversionControllerInterface {
  public path = `/`;
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post(`/conversion_rate/:source/:target`, this.rate.bind(this));
  }

  async rate(req: Request, res: Response) {
    const { source, target } = req.params;
    const { email } = req.body;
    const conversionRateRequest = ConversionRatehController.sanitizeParameters(source, target, email);
    await this.ConversionRate(conversionRateRequest);
    res.status(200).send(new ConversionRateResponse(conversionRateRequest));
  }

  private static sanitizeParameters(source: string, target: string, email: string) {
    return {
      source: source.toUpperCase(),
      target: target.toUpperCase(),
      email,
    };
  }

  async ConversionRate(conversionRateRequest: ConversionRateRequest): Promise<void> {
    await RedisQueue.rpush(`conversion-rate`, JSON.stringify(conversionRateRequest));
  }
}

export default ConversionRatehController;
