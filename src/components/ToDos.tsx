import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from '../types';
import { ToDo } from './ToDo';

const defaultToDos: Todo[] = [];

export function ToDos() {
    const [todos, setTodos]: [Todo[], (data: Todo[]) => void] = useState(defaultToDos);
    const [todosLoading, setTodosLoading]: [boolean, (data: boolean) => void] = useState<boolean>(true);
    useEffect(() => {
        axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                setTodos(response.data.slice(0, 10));
                setTodosLoading(false);
            });
    }, []);
    return (
        <>
            <h1>ToDos</h1>
            {
                !todosLoading ?
                todos.map((todo) => <ToDo todo={todo}/>) :
                <p>Loading...</p>
            }
        </>
    );
}