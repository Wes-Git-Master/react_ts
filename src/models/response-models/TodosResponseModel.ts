import {TodoBasicModel} from "../basic-models/TodoBasicModel";

export interface TodosResponseModel {
    limit: number;
    skip: number;
    total: number;
    todos: TodoBasicModel[];
}
