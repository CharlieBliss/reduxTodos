import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Normally these would be bundled in webpack
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import 'react-material-layout/dist/react-material-layout.min.css'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)
