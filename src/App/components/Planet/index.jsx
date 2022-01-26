import React from 'react'
import { useRecoilState } from 'recoil'
import { planetPage } from './Planet.atom'

export default function Planet() {
	const [page, setPage] = useRecoilState(planetPage)

	return (
		<div>
			<button onClick={() => setPage((prev) => prev - 1)}>{'<'}</button>
			<button onClick={() => setPage((prev) => prev + 1)}>{'>'}</button>
		</div>
	)
}
