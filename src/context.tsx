import { Box } from "@chakra-ui/react";
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { getCart, storeCartLocally } from "store";

type ContextType = {
    cart: CartItem[]
    setCart: Dispatch<SetStateAction<CartItem[]>>
}

export const AppContext = createContext<ContextType | null>(null)

type Props = {
    children: ReactNode
}

export const AppContextProvider: FC<Props> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        return getCart()
    });

    useEffect(() => {
        storeCartLocally(cart)
    }, [cart]);

    const value = {
        cart,
        setCart
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (context === null) {
        throw new Error("useAppContext has to be used within <AppContextProvider>")
    }
    return context
}
