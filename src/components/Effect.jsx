import { useEffect } from 'react';
import { useState } from 'react'
import { Button, Input, Spinner } from 'reactstrap'
import axios from 'axios';
const Effect = () => {
    const [dateString, setDateString] = useState('');
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         const now = new Date();
    //         const hour = now.getHours();
    //         const minute = now.getMinutes();
    //         const second = now.getSeconds();
    //         const showOutput = `${hour}:${minute}:${second}`;
    //         setDateString(showOutput);
    //     }, 1000);
    //     return () => {
    //         clearInterval();
    //     }
    // });
    useEffect(() => {
        // document.title = text;
        // document.addEventListener('contextmenu', () => {
        //     console.log(text);
        // });
        // return () => {
        //     console.log('unmout');

        const apiURL = async () => {
            try {
                const API = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setLoading(false);
                setData(API.data);
                console.log(API);

            } catch (error) {
                console.log(error);
            };
        }
        apiURL();
    }, []);

    const renderItem = dataList => {
        localStorage.setItem('abc', JSON.stringify(data));
        const dataShowed = dataList.map(element => {
            return <li key={element.id}>{element.id} {element.title} {element.completed}</li>
        });
        return dataShowed;
    }

    return (
        <div className="effect-component">
            <Input type="text" value={text} onChange={e => { setText(e.target.value) }}></Input>
            <div>{text}</div>
            {loading && <Spinner color="success"
                type="grow">
                loading...
            </Spinner>}
            <ul>
                {renderItem(data)}
            </ul>
        </div>
    )
}

export default Effect;