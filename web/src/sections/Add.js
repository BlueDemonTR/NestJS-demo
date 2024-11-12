import React, { useState } from 'react'
import { Button, Checkbox, Col, Input, Row, Text } from '../components'
import { Api } from '../lib'

const Add = ({ setData }) => {
	const [name, setName] = useState(''),
		[amount, setAmount] = useState(1),
		[onSale, setOnSale] = useState(false)

	async function submit() {
		const data = {
			name,
			amount,
			onSale
		}

		const res = await Api.post('/createCard', data)
		if(!res) return

		setData(data => [...data, res])

		setName('')
		setAmount(1)
		setOnSale(false)
	}

	return (
		<Row gap='16px' center>
			<Col>
				<Text>Name:</Text>
				
				<Input 
					value={name}
					handleChange={setName}
				/>
			</Col>
			
			<Col>
				<Text>Amount:</Text>

				<Input
					type='number'
					value={amount}
					handleChange={(val) => setAmount(Math.max(1, val))}
				/>
			</Col>
			
			<Col>
				<Text>On Sale:</Text>
				
				<Checkbox 
					value={onSale}
					handleChange={setOnSale}
				/>
			</Col>

			<Button
				onClick={submit}
			>
				Submit
			</Button>
		</Row>
	)
}

export default Add