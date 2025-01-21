// importar pacote padrão Node.js File systems, server para ler e escrever arquivos de sistema
// importar pacote padrão node path reponsável por ler diretorios especificos

import fs from "fs";
import path from "path";
import { podcastModel } from "../models/podecast-model";

// __dirname epga diretorio padrão da aplicação ditorio (src) 
// join junta diretorio com arquivo.
const pathData = path.join(__dirname, "../repositories/podcast.json" );
const language = "utf-8";

// a inserção de ? no parametro torna ele opcional
export const repositoryPodcast = async (podcastName?:string): Promise<podcastModel[]> => {
    // Le o arquivo json passando caminho do arquivo e padrão do texto
    const rawdata = fs.readFileSync(pathData, language);
    //cria arquivo json com dados da const data
    let jsonFile = JSON.parse(rawdata);

    if (podcastName){

        jsonFile = jsonFile.filter((podcast:podcastModel) => podcast.podcastName == podcastName)

    }

    return jsonFile;

}
