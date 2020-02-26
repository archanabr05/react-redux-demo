import {createStore} from 'redux';
import {cakeReducer} from '../redux/cake/cakeReducer'

export const store = createStore(cakeReducer);

