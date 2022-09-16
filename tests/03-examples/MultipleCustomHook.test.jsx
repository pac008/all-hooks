import { fireEvent, render, renderHook, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook"
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Pruebas en MultipleCustomHook', () => { 
    useCounter.mockReturnValue({
        counter: 1,
        increment: jest.fn()
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })
    test('should display the component default', () => { 
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError:null
        });
      
        render(<MultipleCustomHook />);
        screen.debug()

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('The Breaking Bad Phrases'));

        const nextButton = screen.getByRole('button', { name: 'next Phrase'});

        expect(nextButton.disabled).toBeTruthy();
     });

     test('should display a quote', () => { 
        useFetch.mockReturnValue({
            data: [{author:'Miguel', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });
       
        render(<MultipleCustomHook />);
        expect( screen.getByText('Hola Mundo')).toBeTruthy();
        expect( screen.getByText('Miguel')).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'next Phrase'});
        expect(nextButton.disabled).toBeFalsy();
      });


      test('should call the function by increment', () => { 
        useFetch.mockReturnValue({
            data: [{author:'Miguel', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });
        
        render(<MultipleCustomHook />);
        
        const nextButton = screen.getByRole('button', { name: 'next Phrase'});
        fireEvent.click(nextButton)

        expect(useCounter).toHaveBeenCalled()
       });
 });