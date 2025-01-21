import { repositoryPodcast } from "../repositories/podecasts-repository"
import { PodCastTransferModel } from "../models/podcast-transfer-model";
import { statusCode } from "../utils/status-code";


// paraemtro aceita string ou indefinido
export const serviceFilterEpisodes = async (podcastName:string | undefined):Promise<PodCastTransferModel> => {
    
    // definir interface de retorno
    let responseFormat: PodCastTransferModel = {
        statuscode : 0,
        body:[]
    };
    
    // buscar os dados
    // 1 é posição do split, neste caso após o ?p=
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    // verifico se tem conteudo
    // Se data.length != 0 statusCode.OK ":" caso contrario  statusCode.NO_CONTENT
    responseFormat.statuscode = data.length != 0 ? statusCode.OK  : statusCode.NO_CONTENT;
    responseFormat.body = data;
    return responseFormat;
}