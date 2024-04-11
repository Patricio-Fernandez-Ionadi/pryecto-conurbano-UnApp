import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	users: [],
}

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action) => {
			state.users = action.payload
		},
		addUser: (state, action) => {
			state.users = [action.payload, ...state.users]
		},
	},
})

export const { setUsers, addUser } = userSlice.actions

export const selectUsers = (state) => state.navUsers.users

export default userSlice.reducer
