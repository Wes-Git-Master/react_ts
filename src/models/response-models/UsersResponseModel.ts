import {UserBasicModel} from "../basic-models/UserBasicModel";

export interface UsersResponseModel {
    limit: number;
    skip: number;
    total: number;
    users: UserBasicModel[];
}
