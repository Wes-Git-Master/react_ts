import React, {FC} from 'react';
import {TodoBasicModel} from "../../models/basic-models/TodoBasicModel";

interface IProps {
    todo: TodoBasicModel;
}

const TodoComponent: FC<IProps> = ({todo}) => {
    return (
        <div> {todo.todo}</div>
    );
};

export default TodoComponent;
