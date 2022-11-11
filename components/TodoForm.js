import { FLIGHT_SERVER_CSS_MANIFEST } from 'next/dist/shared/lib/constants';
import { useState } from 'react';
const postNewTodo = function (todo) {

    fetch('/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export default function TodoForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div>
            <input Type="text" placeholder="Titulo" value={title} onChange={e => setTitle(e.target.value)} />
            <br />
            <input Type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
            <br />
            <button onClick={() => postNewTodo({ title, description })}>enviar</button>
        </div>
    )
}