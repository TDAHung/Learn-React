import { useState } from 'react'
import { Button, Input } from 'reactstrap'
import { v4 as uudiv4 } from 'uuid'
import './App.css'

import Header from './components/Header.jsx'
import InputTodo from './components/InputTodo.jsx'
import TodoList from './components/TodoList.jsx'
import Footer from './components/Footer.jsx'
import TableClass from './components/TableClass.jsx'
import ProductList from './components/ProductList.jsx'
import FormControl from './components/FormControl.jsx'

function App() {
    const [textResult, setTextResult] = useState('');
    const [todos, setTodos] = useState([]);

    const handleOnChange = event => {
        const { value } = event.target;
        setTextResult(value);
    }

    const onClick = () => {
        if (!textResult) return;
        const todo = {
            id: uudiv4(),
            compledted: false,
            content: textResult
        }
        const newTodos = todos.concat(todo);
        setTodos(newTodos);
        setTextResult('');
    }

    const onCompletedItem = (event, item, index) => {
        todos[index] = { ...item, compledted: !item.compledted };
        setTodos([...todos]);
    }

    const renderTodos = todos.map((item, index) => {
        return <div key={item.id}>
            <Input type="checkbox" onChange={(event) => onCompletedItem(event, item, index)} />
            {item.content}
        </div>
    });

    return (
        <div className="App">
            {/* <Header></Header>
            <InputTodo></InputTodo>
            <TodoList></TodoList>
            <Footer></Footer>

            <TableClass></TableClass>
            <ProductList></ProductList>
            <FormControl></FormControl> */}
            <Header></Header>
            <div>
                <Input type="text" placeholder="todo..." onChange={handleOnChange} value={textResult} />
                <Button onClick={onClick}>Click</Button>
            </div>
            {renderTodos}
        </div>
    )
}

export default App
