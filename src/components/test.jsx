import { useEffect, useState } from "react"
import { Button, Input, Spinner } from "reactstrap"
import axios from 'axios'

// useEffect(callback)
// callback chay khi component mount vao dom
// callback chay khi component re-render
// callback funtion listen event 
// cleanup funtion chay khi component un-mmount khoi dom
// dung cleanup function removeEvent listen (neu co)


//  useEffect(callback, []) //empty array
// Khi truyen empty array vao useEffect thi callback chi chay 1 lan

// useEffect(callback, [deps])



// work flow
// component chạy khi user toggle button 
// hien thi loading khi call api
// khi co du lieu thi tat loading, hien thi todos

const Effect = () => {
    const [dateString, setDateString] = useState('')
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([])
    // useEffect(() => {
    //     const id = setInterval(() => {
    //         const now = new Date()
    //         const hour = now.getHours()
    //         const minute = now.getMinutes()
    //         const second = now.getSeconds()
    //         console.log(`${hour}:${minute}:${second}`)
    //         setDateString(`${hour}:${minute}:${second}`)
    //     }, 1000);
    //     return () => {
    //         //cleanup function
    //         clearInterval(id)
    //     }
    // })

    // useEffect(() => {
    //     function onContextMenu(e) {
    //         console.log(e)
    //     }
    //     document.addEventListener('contextmenu', onContextMenu)
    //     return () => {
    //         document.removeEventListener('contextmenu', onContextMenu)
    //     }
    // })
    useEffect(() => {
        // cach 1: dung async await
        // async function fetchTodos() {
        //     const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
        //     setLoading(false)
        //     setTodos(data.data)
        // }
        // fetchTodos()

        // cach 2:
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((data) => {
                setLoading(false)
                setTodos(data.data)
            })
    }, [])


    return <div className="effect-component">
        <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)} />
        <div>{text}</div>
        <div>{dateString}</div>
        {loading && <Spinner color="primary">
            Loading...
        </Spinner>}
        <ol>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ol>
    </div>
}

export default Effect