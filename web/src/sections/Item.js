import React, { useState } from 'react'
import { Button, Row, Text } from '../components'
import { Api } from '../lib'

const Item = ({ item, setData }) => {
	const { name, amount, onSale, id } = item

	async function remove() {
		const res = await Api.delete(`/deleteCard/${id}`)
		if(!res) return

		setData(data => data.filter(x => x.id !== id))
	}

	return (
		<Row gap='16px' center>
			<Row bg='#444444' hasRadius='100px' pad='8px'>
				<Text bold col='white'>{name}</Text>
			</Row>

			<Text>{amount}</Text>

			<Text
				col={onSale ? 'green' : 'red'}
			>
				{onSale ? 'On Sale' : 'Not On Sale'}
			</Text>

			<Button appearance='danger' onClick={remove}>
				Remove
			</Button>
		</Row>
	)
}

export default Item