import {IncomingMessage, ServerResponse} from  'http';
import { serviceListEpisodes } from '../services/list-episodes-services';
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { contentType } from '../utils/content-type';
import { PodCastTransferModel } from '../models/podcast-transfer-model';

const defaultContent = {"content-type":contentType.JSON};

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse)=> {

    // conteudo do response é retorno da função serviceListEpisodes
    const content: PodCastTransferModel = await serviceListEpisodes();    
    // cabeçalho http
    response.writeHead(content.statuscode, defaultContent);
    // conteudo (end) http retornando Json
    // O método JSON.stringify() converte um objeto ou valor JavaScript, em uma string JSON
    response.write(JSON.stringify(content.body));
    // Ponto final
    response.end();
};

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse)=>{
    
    const content: PodCastTransferModel = await serviceFilterEpisodes(request.url);   
      
    // cabeçalho http
    response.writeHead(content.statuscode, defaultContent);
    response.write(JSON.stringify(content.body));
    response.end()
}