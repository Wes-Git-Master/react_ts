import {UsersResponseModel} from "../models/response-models/UsersResponseModel";

const getAllUsers = (): Promise<UsersResponseModel> => {
    return fetch('https://dummyjson.com/users')
        .then(value => value.json())

}

export {
    getAllUsers
}
