import {TodosResponseModel} from "../models/response-models/TodosResponseModel";

const getAllTodosByUserId = (id: number): Promise<TodosResponseModel> => {
    return fetch('https://dummyjson.com/todos/user/' + id)
        .then((res) => res.json())


}

export {getAllTodosByUserId}
