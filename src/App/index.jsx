import { useState } from 'react'
import * as AppStyled from './App.styled'
import Counter from './components/Counter'
import Display from './components/Display'
import Planet from './components/Planet'

function App() {
	return (
		<AppStyled.Container>
			<Counter />

			<Planet />
			<Display />
		</AppStyled.Container>
	)
}

export default App
