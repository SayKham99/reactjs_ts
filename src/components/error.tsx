interface ErrMsg {
	message: string
}

function Error({ message }: ErrMsg) {
	return <p className='text-center text-red-500'>{message}</p>
}

export default Error
