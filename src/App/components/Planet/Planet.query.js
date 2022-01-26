import { useQuery } from 'react-query'
import { getPlanetsAPI } from './Planet.api'
import { PLANET_QUERY_KEY } from './Planet.constant'
import { DEFAULT_QUERY_CONFIG } from '../../../configs/react-query.config'
import { useRecoilState } from 'recoil'
import { planetAtom } from './Planet.atom'

export const usePlanetQuery = (page = 1, configs) => {
	const query = useQuery(
		[PLANET_QUERY_KEY.PLANETS, page],
		() => getPlanetsAPI(page),
		{
			...DEFAULT_QUERY_CONFIG,
			...configs,
		}
	)

	return query
}
