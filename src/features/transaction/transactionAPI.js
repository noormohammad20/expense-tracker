import axios from "../../utils/axios"

export const getTransaction = async () => {
    const response = await axios.get('/transactions')

    return response.data
}

export const addTransaction = async (data) => {
    const response = await axios.post('/transaction', data)

    return response.data
}

export const editTransaction = async (id, data) => {
    const response = await axios.put(`/transaction${id}`, data)

    return response.data
}

export const deleteTransaction = async (id) => {
    const response = await axios.put(`/transaction${id}`)

    return response.data
}