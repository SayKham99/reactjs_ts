import { useState } from 'react'
import { IProducts } from '../models'
import axios from 'axios'
import Error from './error'

const productData: IProducts = {
	title: 'test product',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 42,
		count: 10
	}
}

interface CreateProps {
	onCreate: (product: IProducts) => void
}

function Create({ onCreate }: CreateProps) {
	const [value, setValue] = useState('')
	const [error, setError] = useState('')

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')

		if (value.trim().length === 0) {
			setError('Please enter valid title')
			return
		}

		productData.title = value
		const response = await axios.post<IProducts>(
			'https://fakestoreapi.com/products',
			productData
		)

		onCreate(response.data)
	}

	return (
		<form onSubmit={submitHandler}>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-none'
				placeholder='Enter Product title'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			{error && <Error message={error} />}
			<button type={'submit'} className='py-2 px-2 border bg-yellow-400'>
				Create
			</button>
		</form>
	)
}

export default Create
