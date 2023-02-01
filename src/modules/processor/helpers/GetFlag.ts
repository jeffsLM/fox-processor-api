import { flags } from '../constants/flags';

interface IDataRequest {
  flag: 'not_found' | 'success' | 'fail' | 'passthought';
  variantAttemp: boolean;
  txt?: string;
}

interface IResult {
  flag: 'not_found' | 'success' | 'fail' | 'passthought';
  variantAttemp: boolean;
  message: string;
}

class GetFlag {
  async execute(data: IDataRequest): Promise<IResult> {
    const { variantAttemp, flag, txt = '' } = data;
    const validMessage = flags
      .find((item) => item.flag === flag)
      .type.find((item) => item.variantAttemp === variantAttemp)
      .message(txt);

    return { message: validMessage, flag, variantAttemp };
  }
}

export { GetFlag };
