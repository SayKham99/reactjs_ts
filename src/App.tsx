import { useContext } from 'react'

import Product from './components/product/product'
import { useProducts } from './hooks/products'
import Loader from './components/loader'
import Error from './components/error'
import Modal from './components/modal/modal'
import Create from './components/create'
import { IProducts } from './models'
import { ModalCTX } from './context/modalCTX'

function App() {
	const { loading, error, products, Add } = useProducts()
	const { modal, open, close } = useContext(ModalCTX)

	const createHandler = (product: IProducts) => {
		close()
		Add(product)
	}

	return (
		<div className='container mx-auto max-w-2xl pt-5'>
			{loading && <Loader />}
			{error && <Error message={error} />}
			{products.map(product => (
				<Product key={product.id} product={product} />
			))}
			{modal && (
				<Modal title={'Create New Product'} onClose={() => close()}>
					<Create onCreate={createHandler} />
				</Modal>
			)}
			<button
				className='fixed bottom-5 right-5 rounded-full bg-green-400 text-white px-4 py-2 text-2xl'
				onClick={() => open()}
			>
				+
			</button>
		</div>
	)
}

export default App
