import React from 'react';
import { useSelectAll } from '../uses/storeMapping/useSelectAll';

export const Index: React.SFC = () => {
    const allStoreData = useSelectAll();
    console.log(allStoreData);
    return (
        <div>
            <h1>Hello, World!</h1>
            <div>
                <h1>StoreData</h1>
                <p>email {allStoreData.user.email}</p>
                <p>name {allStoreData.user.name}</p>
            </div>
        </div>
    )
}