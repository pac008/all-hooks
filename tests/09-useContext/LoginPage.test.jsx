import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('preubas en LoginPage', () => { 
    test('should display the component without user', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
             )
        screen.debug()

        expect(screen.getByLabelText('pre').innerHTML).toBe('null')
     });
    test('should call the setUser with Click in button', () => { 
        const setUser = jest.fn()
        render(
            <UserContext.Provider value={{user: null, setUser}}>
                <LoginPage />
            </UserContext.Provider>
             )
            const button = screen.getByRole('button', { name: 'Establecer Usuario'})
            fireEvent.click(button)
            expect(setUser).toHaveBeenCalledWith({"id": 123, "name": "Miguel"})
     });
 })