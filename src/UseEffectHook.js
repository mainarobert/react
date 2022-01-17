import { useState, useEffect } from "react";


function UseEffectHook() {

    const [resourcetype, setResourceType] = useState('posts');
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourcetype])

    return (
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
            <h1>{resourcetype}</h1>
            {items.map((item, i)=> <pre key={i}>{JSON.stringify(item)}</pre>)}
        </div>
    )
}

export default UseEffectHook
