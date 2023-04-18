import React, { createContext, useContext, useReducer } from 'react';
import { Action, CartContextType, Product, State } from '../Types/app-props.types';



const CartContext = createContext<CartContextType>({} as CartContextType);
