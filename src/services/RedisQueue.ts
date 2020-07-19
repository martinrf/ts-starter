import { createClient } from 'redis';
import { promisify } from 'util';

class RedisQueue {
  client: any;
  lpopAsync: any;
  rpushAsync: any;

  constructor() {
    this.client = createClient({
      host: `127.0.0.1`,
      port: 6379,
    });
    this.lpopAsync = promisify(this.client.lpop).bind(this.client);
    this.rpushAsync = promisify(this.client.rpush).bind(this.client);
  }
  async lpop(key: string) {
    return await this.lpopAsync(key);
  }
  async rpush(key: string, value: any) {
    return await this.rpushAsync(key, value);
  }
}

export default new RedisQueue();
