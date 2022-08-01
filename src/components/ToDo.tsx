import React from "react";
import { Todo } from "../types";
import { FcCheckmark, FcCancel } from "react-icons/fc";

export function ToDo(props: { todo: Todo }) {
    return (
        <div key={props.todo.id} className="todoContainer">
            <div className="todoTittle">{props.todo.title}</div>
            {
                props.todo.completed ?
                <FcCheckmark /> :
                <FcCancel />
            }
        </div>
    );
}