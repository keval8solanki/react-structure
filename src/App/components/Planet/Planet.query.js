import { useQuery } from 'react-query'
import { getPlanetsAPI } from './Planet.api'
import { PLANET_QUERY_KEY } from './Planet.constant'
import { DEFAULT_QUERY_CONFIG } from '../../../configs/react-query.config'

export const usePlanetQuery = (page = 1, configs) =>
	useQuery([PLANET_QUERY_KEY.PLANETS, page], () => getPlanetsAPI(page), {
		...DEFAULT_QUERY_CONFIG,
		...configs,
	})
