import React, { useEffect, useState } from 'react'
import { Col, Row } from './components'
import { Add, Item } from './sections'
import { Api } from './lib'

const App = ({ }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		getData()
	}, [])

	async function getData() {
		const res = await Api.get('/getCards')
		if(!res) return

		setData(res)
	}

	return (
		<Col pad='12px' bg='#DDDDDD' ht='100vh' centerAll start>
			<Add setData={setData} />

		<Col marg='20px 0 0' gap='20px' start center>
			{data.map((x, i) => (
				<Item
					key={i}
					item={x}
					setData={setData}
				/>
			))}
		</Col>
		</Col>
	)
}

export default App