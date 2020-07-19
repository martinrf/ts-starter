import Scheduler from './Scheduler';
const worker = new Scheduler();
console.log(`Worker Started`);
worker.startSchedule().then((r) => () => {
  console.log(r);
});
