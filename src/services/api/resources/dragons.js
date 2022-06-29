import api from '../api'

export const getDragons = (params) => api.get('/', params)

export const getDragonById = (params, { id }) => api.get(`/${id}`, params)

export const postDragon = (params) => api.post('/', params)

export const putDragon = (params, { id }) => api.put(`/${id}`, params)

export const deleteDragon = (params, { id }) => api.delete(`/${id}`)
