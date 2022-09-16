import { useForm } from '../../hooks'

class Todo {
    constructor(description) {
        this.id = new Date().getTime();
        this.description = description;
        this.done = false;
    };
}
export const TodoAdd = ({onNewTodo}) => {
    const { description, onInputChange, onResetForm} = useForm({
        description: '',
    })

    const addNewTodo = (event) => {
        event.preventDefault()
        if (description.length === 0) return;
        const newTodo = new Todo(description);
        onNewTodo(newTodo)
        onResetForm()
    }

    
  return (
    <form onSubmit={(e) => addNewTodo(e)}>
        <input type="text" 
                placeholder='Qué hay que hacer?'
                className='form-control' 
                name="description"
                value={description}
                onChange={onInputChange}
                />

        <button type='submit'
                className='btn btn-outline-primary mt-2'
                >
            Agregar
        </button>
    </form>
  )
}
