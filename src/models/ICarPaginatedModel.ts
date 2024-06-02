import {ICarWithAuthMode} from "./ICarWithAuthMode";
import {IPaginatedPageModel} from "./IPaginatedPageModel";

export interface ICarPaginatedModel {
    total_items: number;
    total_pages: number;
    prev: IPaginatedPageModel | null;
    next: IPaginatedPageModel | null;
    items: ICarWithAuthMode[];
}
