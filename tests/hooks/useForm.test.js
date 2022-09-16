import { act, renderHook }  from "@testing-library/react"
import { useForm }  from "../../src/hooks/useForm"

describe('pruebas en el useForm', () => { 
    const initialForm = {
        name: 'miguel',
        email: 'miguel@gmail.com'
    }
    test('debe de regresar los valores por defecto', () => { 
        
        const { result } = renderHook( ()=> useForm(initialForm) )

        expect(result.current).toEqual({
            formState: initialForm, 
            name: initialForm.name, 
            email: initialForm.email,   
            onInputChange: expect.any( Function),     
            onResetForm: expect.any( Function),
        });
     });

     test('debe de cambiar el name del form', () => { 
        const { result } = renderHook( ()=> useForm(initialForm) );
        const { onInputChange } = result.current;
        const target = {
            name: 'name', 
            value: 'Juan'
        };
        act( () => {
            onInputChange({target})
        });
        expect(result.current.name).toBe('Juan');
        expect(result.current.formState.name).toBe('Juan');
      });

     test('debe de realizar el reset del form', () => { 
        const { result } = renderHook( ()=> useForm(initialForm) );
        const { onResetForm, onInputChange } = result.current;
        const target = {
            name: 'name', 
            value: 'Juan'
        };
        act( () => {
            onInputChange({target})
            onResetForm()
        });
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
      });
 });