import { nanoid } from 'nanoid'
import { useRecoilValue } from 'recoil'
import { planetPage } from '../Planet/Planet.atom'
import { usePlanetQuery } from '../Planet/Planet.query'

export default function Planet2() {
	const page = useRecoilValue(planetPage)
	const planets = usePlanetQuery(page)

	if (planets?.isLoading) return <h1>Loading...</h1>
	return (
		<div>
			<ol>
				{planets?.data?.results?.map((planet) => (
					<li key={nanoid()}>{planet.name}</li>
				))}
			</ol>
		</div>
	)
}
