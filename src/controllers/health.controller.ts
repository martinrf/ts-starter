import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';

class HealthController implements IControllerBase {
  public path = `/`;
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(`/health`, this.health);
  }

  health = (req: Request, res: Response) => {
    res.status(200).send(`Ok`);
  };
}

export default HealthController;
