import {ProductModel} from "./ProductModel";

export interface CartModel {

    id: number,
    products: ProductModel[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}


