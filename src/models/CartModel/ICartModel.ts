import {IProductModel} from "./IProductModel";

export interface ICartPropsModel {
    id: number,
    products: IProductModel[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}