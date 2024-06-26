import React, { createContext, useContext, useState } from 'react';

const PrivateContext = createContext();

export const usePrivate = () => useContext(PrivateContext);

export const PrivateProvider = ({ children }) => {
    const [boardPrivate, setBoardPrivate] = useState(false);
    const [homePrivate, setHomePrivate] = useState(false);
    const togglePrivateHome = () => {
        setHomePrivate(!homePrivate);
    };
    const togglePrivateBoard = () => {
        setBoardPrivate(!boardPrivate);
    };
    return (
        <PrivateContext.Provider value={{ boardPrivate, togglePrivateBoard, homePrivate, togglePrivateHome }}>
            {children}
        </PrivateContext.Provider>
    );
};