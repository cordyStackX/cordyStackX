import React from 'react';
import { useEffect } from 'react';
 
export default function UseEffect(
    callback: () => void | (() => void),
    deps: React.DependencyList = []
) {

    useEffect(callback, deps);

}