import { Provider } from 'react-redux'
import { store } from './src/store/store.js'

import Application from './src'

export default function App() {
	return (
		<Provider store={store}>
			<Application />
		</Provider>
	)
}
