import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const useApi = () => ({
    getContatosList: async () => {
        const contatos = await api.get('/').catch()
        return contatos.data
    },

    getContatoByNome: async (nome) => {
        const contato = await api.get(`/${nome}`).catch()
        return contato.data
    },
    
    createContato: async (nome, email, telefone) => {
        const newContato = await api.post('/', {nome, email, telefone}).catch()
        return newContato.data
    },
    
    deleteContato: async (id) => {
        await api.delete(`/${id}`).catch()
    }
})