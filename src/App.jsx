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
import Effect from './components/Effect.jsx'
import Upload from './components/Upload.jsx'

function App() {
    const [textResult, setTextResult] = useState('');
    const [todoList, setTodos] = useState([]);
    const [show, setShow] = useState('');

    const handleOnChange = event => {
        const { value } = event.target;
        setTextResult(value);
    }

    const onClick = () => {
        if (!textResult) {
            alert('Ko co input data');
            return;
        }
        const todo = {
            id: uudiv4(),
            compledted: false,
            content: textResult
        }
        const newTodos = todoList.concat(todo);
        setTodos(newTodos);
        setTextResult('');
    }

    const onCompletedItem = (event, item, index) => {
        todoList[index] = { ...item, compledted: !item.compledted };
        setTodos([...todoList]);
    }

    const handleRemove = (event, index) => {
        if (index > -1) {
            todoList.splice(index, 1);
        }
        setTodos([...todoList]);
    }

    const renderTodos = todoList.map((item, index) => {
        return <div key={item.id}>
            <Input type="checkbox" onChange={(event) => onCompletedItem(event, item, index)} />
            {item.content}
            <Button color="danger" onClick={(event) => handleRemove(event, index)}>X</Button>
        </div>
    });

    const itemsLeft = (todoList) => {
        return <div>{todoList.length} items left</div>
    }

    const removeAll = () => {
        const todoTemp = [];
        setTodos([...todoTemp]);
    }

    return (
        <div className="App">
            {/* <Header></Header>
            <InputTodo></InputTodo>
            <TodoList></TodoList>
            <Footer></Footer>

            <TableClass></TableClass>
            <ProductList></ProductList>
            <FormControl></FormControl> */}


            {/* <Header></Header>
            <div>
                <Input type="text" placeholder="todo..." onChange={handleOnChange} value={textResult} />
                <Button onClick={onClick}>Click</Button>
            </div>
            {renderTodos}
            <div>
                {itemsLeft(todoList)}
                <div>
                    <Button onClick={removeAll}>Clear</Button>
                </div>
            </div> */}
            <Button onClick={() => { setShow(!show) }}>Toggle</Button>
            {show ? <Effect /> : null}
            <Upload></Upload>
        </div>
    )
}

export default App
