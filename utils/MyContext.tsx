// MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your list
type Dish = {
    name: string;
    quantity: number;
};

type MyContextType = {
    orders: Dish[];
    clearOrders: () => void;
    addItemToList: (dish: Dish) => void;
    removeItemFromList: (dish: Dish) => void;
    logList: () => void;
};

// Create a context with an initial value (an empty array in this case)
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component to wrap your app with
interface MyContextProviderProps {
    children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [orders, setOrders] = useState<Dish[]>([]);

    const addItemToList = (dish: Dish) => {
        setOrders((prevOrders) => [...prevOrders, dish]);
    };

    const removeItemFromList = (dish: Dish) => {
        setOrders((prevOrders) => prevOrders.filter((d) => d.name !== dish.name));
    };

    const clearOrders = () => {
        setOrders([]);
      };

    const logList = () => {
        console.log('My List:', orders);
    };

    const contextValue: MyContextType = {
        orders,
        addItemToList,
        removeItemFromList,
        clearOrders,
        logList,
    };


    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

// Create a custom hook to easily access the context in your components
export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};
