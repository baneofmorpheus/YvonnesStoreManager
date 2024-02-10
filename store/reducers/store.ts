import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';
import { StoreInterface } from '../../types/store';

export interface StoreState {
    currentStore: StoreInterface | undefined;
}

const initialState: StoreState = {
    currentStore: undefined,
}

export const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {

        updateCurrentStoreData: (state, action: PayloadAction<StoreInterface>) => {
            return { ...state, currentStore: action.payload }

        },

    },
})

// Action creators are generated for each case reducer function
export const { updateCurrentStoreData } = storeSlice.actions

export default storeSlice.reducer