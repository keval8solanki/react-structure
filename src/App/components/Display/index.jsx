import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { counterAtom } from '../Counter/Counter.atom'
import { planetAtom, planetPage } from '../Planet/Planet.atom'
import { nanoid } from 'nanoid'

import { usePlanetQuery } from '../Planet/Planet.query'
import Planet2 from '../Planet2'

export default function Display() {
	const [show, setShow] = useState(false)

	const count = useRecoilValue(counterAtom)
	const page = useRecoilValue(planetPage)
	const planets = usePlanetQuery(page)

	return (
		<div>
			<p>Count: {count}</p>
			<p>Page: {page}</p>

			{planets?.isLoading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<ol>
						{planets?.data?.results?.map((planet) => (
							<li key={nanoid()}>{planet.name}</li>
						))}
					</ol>

					<button onClick={() => setShow((prev) => !prev)}>
						{show ? 'Hide' : 'Show'}
					</button>
					{show && <Planet2 />}
				</>
			)}
		</div>
	)
}
