import { render, screen } from "@testing-library/react"
import { useTodo } from "../../src/8-useReducer/hooks/useTodo"
import { TodoApp } from "../../src/8-useReducer/TodoApp"

jest.mock('../../src/8-useReducer/hooks/useTodo')

describe('Test en todoApp', () => { 

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Comprar pan', done: false},
            { id: 2, description: 'Comprar galletas', done: false}
        ],
        addNewTodo: jest.fn(),
        removeTodo: jest.fn(),
        onToggleTodo: jest.fn(),
        penddingTodosCount: 2,
        allTodosCount: 2
    })
    test('should display the component correctly', () => { 
        render( <TodoApp />);

        expect(screen.getByText('Comprar pan')).toBeTruthy()
        expect(screen.getByText('Comprar galletas')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()
     })
 })