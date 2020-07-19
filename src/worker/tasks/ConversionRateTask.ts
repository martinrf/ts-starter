import ITaskInterface from '../../interfaces/ITask.interface';
import RedisQueue from '../../services/RedisQueue';
import ConversionRateRequest from '../../models/ConversionRateRequest';

class ConversionRateTask implements ITaskInterface {
  async task() {
    console.log(Date.now());
    const conversionRate = await this.getNextConversionRate();
    while(conversionRate != null){
      this.processRate(conversionRate);
    }
  }

  private async getNextConversionRate() {
    const queuedRequest = await RedisQueue.lpop(`conversion-rate`);
    return new ConversionRateRequest(queuedRequest.source, queuedRequest.target, queuedRequest.email);
  }

  private processRate(conversionRate: ConversionRateRequest) {

  }
}

export default new ConversionRateTask();
