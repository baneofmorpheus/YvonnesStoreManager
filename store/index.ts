import { configureStore, Tuple } from '@reduxjs/toolkit'
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import rootReducer from './reducers'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from '../ReactotronConfig'


const persistConfig = {
    key: 'root',
    version:1,
    storage:AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    enhancers: (getDefaultEnhancers) => !__DEV__ ?
        getDefaultEnhancers() : getDefaultEnhancers().concat(Reactotron.createEnhancer!())

})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export const persistedStore = persistStore(store)


export default store