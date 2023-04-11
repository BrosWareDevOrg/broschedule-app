'use client';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer } from '@/redux/rootReducer';

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
