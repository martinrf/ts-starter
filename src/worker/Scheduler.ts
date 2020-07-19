import ISchedulerInterface from '../interfaces/IScheduler.interface';
import { schedule } from 'node-cron';
import ConversionRateTask from './tasks/ConversionRateTask';

class Scheduler implements ISchedulerInterface {
  async startSchedule(): Promise<any> {
    const workerSchedule = schedule(`* * * * *`, () => ConversionRateTask.task());
    workerSchedule.start();
  }
}

export default Scheduler;
