import '../assets/inputTodo.css'
import { Button } from 'reactstrap'

const InputTodo = () => {
    return (
        <div>
            <input type="text" className="inputTodo" />
            <Button color="success">Add</Button>
        </div>
    );
}

export default InputTodo;