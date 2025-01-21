import { PodCastTransferModel } from '../models/podcast-transfer-model';
import {repositoryPodcast} from '../repositories/podecasts-repository'
import { statusCode } from '../utils/status-code';

export const serviceListEpisodes = async ():Promise<PodCastTransferModel> => {
    
    // definir interface de retorno contrato
    let responseFormat: PodCastTransferModel = {
        statuscode : 0,
        body:[]
    };
    
    // busco dados
    const data = await repositoryPodcast();
    
    // Verifica o tipo de resposta
    responseFormat = {
        statuscode: data.length != 0 ? statusCode.OK  : statusCode.NO_CONTENT,
        body: data,
    }
    
    
    return responseFormat;
};