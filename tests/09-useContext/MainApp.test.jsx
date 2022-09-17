import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Pruebas en MainApp', () => { 
    test('should display HomePage', () => { 
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

            console.log(screen.getByText('HomePage'))
            screen.debug()
            // expect(screen.getByRole('heading',{ level: 'h1'})).toBeTruthy()

     });
    test('should display LoginPage', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );


            expect(screen.getByText('LoginPage')).toBeTruthy()

     });
 })