import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {CustomHookDemo} from "./customHookDemo";
import { App } from './App';



const TreeContext = createContext();
export const useTrees = () => useContext(TreeContext);
const trees = [
  {id:1, type:"Maple"},
  {id:2, type:"Oak"},
  {id:3, type:"Family"},
  {id:4, type:"Component"}
];

console.log({trees});

ReactDOM.render(
  <TreeContext.Provider value={{trees}}>
    <CustomHookDemo />
    <App />

  </TreeContext.Provider>,
  document.getElementById('root')
);
