import {AxiosResponse} from "axios";

export type IRes<T> = Promise<AxiosResponse<T>>     //  тип, який представляє Promise, що повертає AxiosResponse
                                                    //  з даними типу T.