class ConversionRateRequest {
  source: string;
  target: string;
  email: string;

  constructor(source: string, target: string, email: string) {
    this.source = source;
    this.target = target;
    this.email = email;
  }
}

export default ConversionRateRequest;
