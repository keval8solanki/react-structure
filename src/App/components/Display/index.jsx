import React from 'react'
import { useRecoilValue } from 'recoil'
import { counterAtom } from '../Counter/Counter.atom'
import { planetAtom, planetPage } from '../Planet/Planet.atom'
import { nanoid } from 'nanoid'

import { usePlanetQuery } from '../Planet/Planet.query'

export default function Display() {
	const count = useRecoilValue(counterAtom)
	const page = useRecoilValue(planetPage)
	const planets = usePlanetQuery(page)

	if (planets?.isLoading) return <h1>Loading...</h1>
	return (
		<div>
			<p>Count: {count}</p>
			<ol>
				{planets?.data?.results?.map((planet) => (
					<li key={nanoid()}>{planet.name}</li>
				))}
			</ol>
		</div>
	)
}
