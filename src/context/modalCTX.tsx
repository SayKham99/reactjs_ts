import { createContext, useState } from 'react'

interface IModalCTX {
	modal: boolean
	open: () => void
	close: () => void
}

export const ModalCTX = createContext<IModalCTX>({
	modal: false,
	open: () => {},
	close: () => {}
})

export const ModalState = ({ children }: { children: React.ReactNode }) => {
	const [modal, setModal] = useState(false)

	const open = () => setModal(true)

	const close = () => setModal(false)

	return (
		<ModalCTX.Provider value={{ open, close, modal }}>
			{children}
		</ModalCTX.Provider>
	)
}
