import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
}


export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            const { isLoggedIn } = action.payload
            state.isLoggedIn = isLoggedIn
            localStorage.setItem('isLoggedIn', isLoggedIn)
        },

        userLogout: (state, _action) => {
            state.isLoggedIn = false
            localStorage.removeItem('isLoggedIn')
        },
    }
})

export default userSlice.reducer
export const {
    userLogin,
    userLogout,
} = userSlice.actions
