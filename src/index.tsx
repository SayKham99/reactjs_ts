import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ModalState } from './context/modalCTX'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<ModalState>
		<App />
	</ModalState>
)
