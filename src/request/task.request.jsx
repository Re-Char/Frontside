import * as axios from 'axios';

async function TaskList() {
    const client = axios.default

    client.get('http://127.0.0.1:7001').then((response) => {
        console.log(response)
    })

    client.post('http://127.0.0.1:7001/practice/create', {
        name: "Hu Ran",
        id: 231870261
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(response)
    })
}