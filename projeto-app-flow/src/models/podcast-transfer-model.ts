import { podcastModel } from "./podecast-model";

export interface PodCastTransferModel{
    statuscode: number;
    body: podcastModel[];
}