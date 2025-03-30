
import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/authFeatures/userSlice'
const store = configureStore({
    reducer: {
        auth: authReducer,

    }
})
export default store