import React from 'react'
import { useRecoilState } from 'recoil'
import { counterAtom } from './Counter.atom'

export default function Counter() {
	const [, setCount] = useRecoilState(counterAtom)
	return (
		<div>
			<button onClick={() => setCount((prev) => prev + 1)}>+</button>
			<button onClick={() => setCount((prev) => prev - 1)}>-</button>
		</div>
	)
}
