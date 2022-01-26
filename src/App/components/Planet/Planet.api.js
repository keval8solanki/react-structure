import axios from 'axios'
import { BASE_URL } from './Planet.constant'

const starWarsAPI = axios.create({
	baseURL: BASE_URL,
})

export const getPlanetsAPI = async (page = 1) => {
	const { data } = await starWarsAPI.get(`/planets/?page=${page}`)
	return data
}
