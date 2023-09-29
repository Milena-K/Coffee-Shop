type CategoryItem = {
    imgPath: string
    name: string
    desc: string
    price: string
    id: string
}

type TabMenuData = {
    [category: string]: CategoryItem[]
}

type CartItem = {
    item: CategoryItem,
    quantity: number
}

type AppContextType = {
    cart: CartItem[]
    storeCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}
