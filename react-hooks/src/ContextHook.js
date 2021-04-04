import React from 'react';
import { useTrees } from '.';

export function ContextHook() {
    const {trees} = useTrees();

  return (
    <>
        <ul>
            {trees.map(_ => <li key={_.id}>{_.type}</li>)}
        </ul>
    </>
  );
}
