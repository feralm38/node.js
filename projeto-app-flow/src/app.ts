import http from 'http'
import { getFilterEpisodes, getListEpisodes } from './controllers/podecasts-controller';
import { routes } from "./routes/routes";
import { httpMethod } from "./utils/http-methods";

export const app = async(request: http.IncomingMessage, response: http.ServerResponse) =>{
        
    // querystring    
    // split separa pelo pela ? 
    // "||"" /"??" ou senão econtrar deixa vazio
    const baseUrl = request.url?.split("?")[0];

    // Listar podcast
    if(request.method === httpMethod.GET && baseUrl===routes.LIST){            
        // Função declarada no arquivo pode podecasts-controllere improtada para este arquivo            
       await getListEpisodes(request, response);
    }
    // httpMethod recuperado do arquivo de eNUm dentro da pasta de utils
    // routes recuperado do arquivo de eNUm dentro de pasta routes
    if(request.method === httpMethod.GET && baseUrl===routes.EPISODE)
         // Função declarada no arquivo pode podecasts-controllere improtada para este arquivo
       await getFilterEpisodes(request, response);          
}