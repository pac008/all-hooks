import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/8-useReducer/components/TodoItem";

describe('Test in de TodoItem', () => { 

    const todo = {
        id: 1,
        description: 'Recolectar piedra del alma',
        done: false
    };
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should display the todo pending', () => { 
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center ')
        
    });

    test('should display the todo completed', () => { 
        todo.done = true;
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>);        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through')
    });

    test('span should call toggleTodo with click', () => { 
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>);   
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodo).toHaveBeenCalledWith(todo.id)
     });
     
     test('button should call deleteTodo with click', () => { 
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>);   
        const buttonElement = screen.getByRole('button', { name: 'Borrar'});
        fireEvent.click(buttonElement);
        expect(onDeleteTodo).toHaveBeenCalledWith(todo.id)
     });
 })