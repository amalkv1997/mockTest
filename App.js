/**
 * @format
 */
 import React from 'react';
 import { Provider } from 'react-redux';
 import configureStore from './src/Store/index';
import LabourList from './src/screens/LabourList';
 const store = configureStore()
 
 const ReduxApp = () => (
     <Provider store={store}>
         <LabourList />
     </Provider>
 )
 
export default ReduxApp