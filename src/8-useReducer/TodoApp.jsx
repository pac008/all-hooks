import React, { useEffect, useReducer } from 'react'
import { TodoAdd, TodoList} from './components'
import { useTodo } from './hooks/useTodo'
import { todoReducer } from './todoReducer'



export const TodoApp = () => {
    const {
        todos,
        addNewTodo,
        removeTodo,
        onToggleTodo,
        penddingTodosCount,
        allTodosCount
    } = useTodo();
   
  return (
    <>
        <h1>Todo App {allTodosCount} - <small>Pendientes: {penddingTodosCount}</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                {/* TODO LIST */}
                <TodoList todos={todos} onDeleteTodo={removeTodo} onToggleTodo={onToggleTodo} />
                {/* END TODO LIST */}
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* TODO ADDD onNewTodo() */}
                {/* { type TODO } */}
                <TodoAdd onNewTodo={addNewTodo} />
                {/* END TODO ADD */}
            </div>
        </div>
       
    </>
  )
}
