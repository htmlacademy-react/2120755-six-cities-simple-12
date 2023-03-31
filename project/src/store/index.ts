import {configureStore} from '@reduxjs/toolkit';
import { storeUpdate } from './reducer';

export const store = configureStore({ reducer: storeUpdate,});
