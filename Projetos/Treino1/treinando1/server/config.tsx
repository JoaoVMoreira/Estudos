import axios from 'axios'

const product = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        "Content-Type": "aplication/json"
    }
})

export default product