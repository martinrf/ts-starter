import ConversionRateRequest from '../models/ConversionRateRequest';

interface IConversionControllerInterface {
  ConversionRate(conversionRateRequest: ConversionRateRequest): Promise<void>;
}

export default IConversionControllerInterface;
