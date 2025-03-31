import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type AuthStateTYpe = {
    isLoggedIn: boolean,
}

const initialState: AuthStateTYpe = {
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')!) || false,
}


export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLogin: (state, action: PayloadAction<{ isLoggedIn: boolean}>) => {
            const { isLoggedIn } = action.payload
            state.isLoggedIn = isLoggedIn
            localStorage.setItem('isLoggedIn', isLoggedIn.toString())
        },

        userLogout: (state) => {
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
