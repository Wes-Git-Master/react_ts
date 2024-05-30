import {ICarWithAuth} from "./ICarWithAuth";

export interface ICarPaginatedModel{
    total_item:number,
    total_pages:number,
    prev:string,
    next:string,
    items:ICarWithAuth[],
}