import {configureStore} from '@reduxjs/toolkit';
import { offerListUpdate } from './reducer';

export const store = configureStore({ reducer: offerListUpdate,});
