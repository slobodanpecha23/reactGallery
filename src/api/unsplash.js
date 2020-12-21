import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QAeERi9C7l7X-GP9X4_vvWtWALF-ioXDofP0GiBbMgM' 
    }
})