import React from 'react';
import { ContextHook } from './ContextHook';
import {FetchHookComponent} from './FetchHookComponent';


export function App() {
  return (
    <>
      <ContextHook></ContextHook>
      <FetchHookComponent user="kuldeepkashyap100"></FetchHookComponent>
    </>
  );
}
