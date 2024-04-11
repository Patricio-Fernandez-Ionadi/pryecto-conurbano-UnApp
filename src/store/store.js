import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { userSlice } from './reducers'

export const store = configureStore(
	{
		reducer: {
			usersReducer: userSlice,
			// navProducts: productSlice,
		},
	},
	applyMiddleware(thunk)
)

// console.log(store.getState()) // -> { usersReducer: { users: [] } }
