import {ICarWithAuth} from "./ICarWithAuth";
import {IPaginationPageModel} from "../pagination/IPaginationPageModel";

export interface ICarPaginatedModel {
    total_items: number,
    total_pages: number,
    prev: IPaginationPageModel | null,
    next: IPaginationPageModel | null,
    items: ICarWithAuth[],
}