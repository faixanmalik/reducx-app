import { configureStore  } from '@reduxjs/toolkit';
import amountReducer from './reducers/amountReducer'

const reduxStore = configureStore({
    reducer: {
        amount: amountReducer
    }
});

export default reduxStore;