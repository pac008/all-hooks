import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"

describe('preubas en HomePage', () => { 

    const user = {
        id: 1,
        name: 'Miguel'
    };

    test('should display the component without user', () => { 
         render(
             <UserContext.Provider value={{user: null}}>
                <HomePage />
             </UserContext.Provider>
         );
         const preTag = screen.getByLabelText('pre');
         expect(preTag.innerHTML).toBe('null');
     });

    test('should display the component with user', () => { 
         render(
             <UserContext.Provider value={{user}}>
                <HomePage />
             </UserContext.Provider>
         );
         const preTag = screen.getByLabelText('pre');
         expect( preTag.innerHTML).toBe(JSON.stringify (user, null ,3));
     });

 });