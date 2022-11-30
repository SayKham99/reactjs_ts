import { IProducts } from '../../models'
import { useState } from 'react'

interface ProductProps {
	product: IProducts
}

function Product({ product }: ProductProps) {
	const [details, setDetails] = useState(false)
	const btnBgClass = details ? 'bg-yellow-500' : 'bg-blue-400'
	const btnClasses = ['px-4 py-2 border', btnBgClass]
	return (
		<div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
			<img className='w-1/6' src={product.image} alt={product.title} />
			<p>{product.title}</p>
			<p className='font-bold'>{product.price}</p>
			<button
				className={btnClasses.join(' ')}
				onClick={e => setDetails(!details)}
			>
				{details ? 'Hide' : 'Show'} Details
			</button>
			{details && (
				<div>
					<p>{product.description}</p>
					<p>
						Rate:
						<span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span>
					</p>
				</div>
			)}
		</div>
	)
}

export default Product
