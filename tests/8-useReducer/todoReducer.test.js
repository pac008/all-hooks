import { todoReducer } from "../../src/8-useReducer/todoReducer"

describe('pruebas en todoReducer', () => { 
    
    const initialState = [{
        id: 1,
        description: 'Comprar pan',
        done: false
    }]

    test('should return the initial state', () => { 
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
     });

     test('should add one todo', () => { 
         const action = {
             type: '[TODO] add todo',
             payload: {
                 id: 2,
                 description: 'Dormir',
                 done: false
             }
         };
         const newState = todoReducer(initialState, action);
         expect(newState.length).toBe(2);
         expect(newState).toContain(action.payload);
      });

      test('should remove one todo', () => { 
        const action = {
            type: '[TODO] remove todo',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
      });

      test('should do toggle the done of the todo', () => { 
        const action = {
            type: '[TODO] toggle todo',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        const todo = newState.find(todo => todo.id = action.payload)
        expect(todo.done).toBeTruthy();
       });
 })