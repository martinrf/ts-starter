import ConversionRateRequest from './ConversionRateRequest';

class ConversionRateResponse {
  message: string;
  request: ConversionRateRequest;

  constructor(request: ConversionRateRequest) {
    this.message = `Following request queued for conversion rate service.`;
    this.request = request;
  }
}

export default ConversionRateResponse;
