import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';

export interface AuthenticationState {
    user: User| undefined;
}

const initialState: AuthenticationState = {
    user: undefined,
}

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
      
        loginUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        logOutUser: (state) => {
            state.user = undefined
        },
    },
})

// Action creators are generated for each case reducer function
export const {logOutUser, loginUser } = authenticationSlice.actions

export default authenticationSlice.reducer